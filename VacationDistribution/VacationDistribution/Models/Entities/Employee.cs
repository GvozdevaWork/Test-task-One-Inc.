using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VacationDistribution.Models
{
    public class Employee
    {
        /// <summary>
        /// Идентификатор сотрудника
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Имя
        /// </summary>
        public string FirstName { get; set; }
        /// <summary>
        /// Отчество
        /// </summary>
        public string MiddleName { get; set; }
        /// <summary>
        /// Фамилия
        /// </summary>
        public string LastName { get; set; }
        /// <summary>
        /// Должность
        /// </summary>
        public EPosts Post { get; set; }
    }

    public enum EPosts
    {
        Dev = 1,
        QA = 2,
        TeamLead = 3
    }
}
