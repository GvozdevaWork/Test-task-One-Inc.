using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VacationDistribution.Models;

namespace VacationDistribution.Controllers
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        ApplicationContext db;
        public EmployeeController(ApplicationContext context)
        {
            db = context;
            if(!db.Employees.Any())
            {
                db.Employees.Add(new Employee { FirstName = "Наталия", LastName = "Гвоздева", MiddleName = "Владимировна", Post = EPosts.Dev });
                db.Employees.Add(new Employee { FirstName = "Александр", LastName = "Гвоздев", MiddleName = "Владимирович", Post = EPosts.Dev });
                db.Employees.Add(new Employee { FirstName = "Виктор", LastName = "Борисов", MiddleName = "", Post = EPosts.TeamLead });
                db.Employees.Add(new Employee { FirstName = "Иван", LastName = "Иванов", MiddleName = "Иванович", Post = EPosts.QA });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Employee> GetList()
        {
            return db.Employees.ToList();
        }

        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return db.Employees.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Employees.Add(employee);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Update(employee);
                db.SaveChanges();
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Employee employee = db.Employees.FirstOrDefault(x => x.Id == id);
            if (employee != null)
            {
                db.Employees.Remove(employee);
                db.SaveChanges();
            }
            return Ok();
        }
    }
}