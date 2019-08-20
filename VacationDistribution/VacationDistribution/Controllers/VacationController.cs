using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VacationDistribution.Models;
using VacationDistribution.Models.Entities;
using VacationDistribution.Models.Validation;
using VacationDistribution.Services;

namespace VacationDistribution.Controllers
{
    [Route("api/vacations")]
    [ApiController]
    public class VacationController : ControllerBase
    {
        ApplicationContext db;
        public VacationController(ApplicationContext context)
        {
            db = context;
            if (!db.Vacations.Any())
            {
                var employee = db.Employees.FirstOrDefault();
                db.Vacations.Add(new Vacation { EmployeeId = employee.Id, Employee = employee, StartDate = new DateTime(2019, 5, 1), EndDate = new DateTime(2019, 5, 12) });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Vacation> GetVacationList()
        {
            return db.Vacations.ToList();
        }

        [HttpGet("{id}")]
        public Vacation Get(int id)
        {
            return db.Vacations.FirstOrDefault(x => x.Id == id);
        }

        [HttpGet]
        [Route("next")]
        public IEnumerable<Vacation> GetVacationNextList()
        {
            VacationService vacationService = new VacationService(db);
            return vacationService.GetVacationNextList();
        }

        [HttpPost]
        public IActionResult Post([FromBody]Vacation vacation)
        {
            VacationValidation vacationValidation = new VacationValidation(db);
            List<string> errorsList = vacationValidation.IsVacationValid(vacation);
            if (errorsList.Count == 0)
            {
                db.Vacations.Add(vacation);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest(errorsList);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Vacation vacation)
        {
            VacationValidation vacationValidation = new VacationValidation(db);
            List<string> errorsList = vacationValidation.IsVacationValid(vacation);
            if (errorsList.Count == 0)
            {
                db.Update(vacation);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest(errorsList);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Vacation vacation = db.Vacations.FirstOrDefault(x => x.Id == id);
            if (vacation != null)
            {
                db.Vacations.Remove(vacation);
                db.SaveChanges();
            }
            return Ok();
        }       
    }
}