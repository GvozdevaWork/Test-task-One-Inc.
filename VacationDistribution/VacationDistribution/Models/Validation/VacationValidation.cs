using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacationDistribution.Models.Entities;
using VacationDistribution.Controllers;

namespace VacationDistribution.Models.Validation
{
    public class VacationValidation
    {
        private ApplicationContext Context { get; set; }

        public VacationValidation(ApplicationContext context)
        {
            Context = context;
        }
        public List<string> IsVacationValid(Vacation vacation)
        {
            List<string> errorsList = new List<string>();
            Employee employee = Context.Employees.FirstOrDefault(e => e.Id == vacation.EmployeeId);
            int devCount = 0, teamLeadCount = 0, qaCount = 0;

            try
            {
                var parallelVacactionPosts = Context.Vacations.Where(v => Intersects(v, vacation) == true)
                                              .Join(Context.Employees, v => v.EmployeeId, e => e.Id, (v, e) => new { e.Post })
                                              .ToList();

                devCount = parallelVacactionPosts.Count(pv => pv.Post == EPosts.Dev);
                teamLeadCount = parallelVacactionPosts.Count(pv => pv.Post == EPosts.TeamLead);
                qaCount = parallelVacactionPosts.Count(pv => pv.Post == EPosts.QA);
            }
            catch(InvalidDateRangeException ex)
            {
                errorsList.Add("Некорректные значения дат! Дата начала отпуска больше даты окончания");
            }

            if (employee.Post == EPosts.Dev)
            {
                if (teamLeadCount >= 1) errorsList.Add("Dev и TeamLead не могут находиться одновременно в отпуске");
                if (devCount >= 2) errorsList.Add("3 Dev не могут одновременно находиться в отпуске");
                if (qaCount >= 2) errorsList.Add("1 Dev и 2 QA не могут одновременно находиться в отпуске");
            }
            else if (employee.Post == EPosts.QA)
            {
                if (qaCount >= 3) errorsList.Add("4 QA не могут одновременно находиться в отпуске");
                if (devCount >= 1 && qaCount >= 1) errorsList.Add("1 Dev и 2 QA не могут одновременно находиться в отпуске");
            }
            else if (employee.Post == EPosts.TeamLead)
            {
                if (devCount >= 1) errorsList.Add("Dev и TeamLead не могут находиться одновременно в отпуске");
                if (teamLeadCount >= 1) errorsList.Add("2 TeamLead не могут находиться одновременно в отпуске");
            }
            return errorsList;
        }

        private bool Intersects(Vacation vacation1, Vacation vacation2)
        {
            if (vacation1.StartDate > vacation1.EndDate || vacation2.StartDate > vacation2.EndDate)
                throw new InvalidDateRangeException();

            if (vacation1.StartDate == vacation1.EndDate || vacation2.StartDate == vacation2.EndDate)
                return false;

            if (vacation1.StartDate == vacation2.StartDate || vacation1.EndDate == vacation2.EndDate)
                return true;

            if (vacation1.StartDate < vacation2.StartDate)
            {
                if (vacation1.EndDate > vacation2.StartDate && vacation1.EndDate < vacation2.EndDate)
                    return true;

                if (vacation1.EndDate > vacation2.EndDate)
                    return true;
            }
            else
            {
                if (vacation2.EndDate > vacation1.StartDate && vacation2.EndDate < vacation1.EndDate)
                    return true;

                if (vacation2.EndDate > vacation1.EndDate)
                    return true;
            }

            return false;
        }
    }
}
