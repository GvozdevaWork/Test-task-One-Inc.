using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacationDistribution.Models;
using VacationDistribution.Models.Entities;

namespace VacationDistribution.Services
{
    public class VacationService
    {
        private ApplicationContext Context { get; set; }

        public VacationService(ApplicationContext context)
        {
            Context = context;
        }
        
        public IEnumerable<Vacation> GetVacationNextList()
        {
            var tempNextVacationQuery = from v in Context.Vacations
                                        where v.StartDate >= DateTime.Now
                                        group v by new { v.EmployeeId } into grp
                                        select new
                                        {
                                            EmpId = grp.Key.EmployeeId,
                                            MinDate = grp.OrderBy(g => g.StartDate).First().StartDate
                                        };


            var nextVacationQuery = from v in Context.Vacations
                                    join tnv in tempNextVacationQuery on v.EmployeeId equals tnv.EmpId
                                    where v.StartDate == tnv.MinDate
                                    select new Vacation
                                    {
                                        Id = v.Id,
                                        EmployeeId = v.EmployeeId,
                                        StartDate = v.StartDate,
                                        EndDate = v.EndDate
                                    };

            return nextVacationQuery.ToList();
        }
    }
}
