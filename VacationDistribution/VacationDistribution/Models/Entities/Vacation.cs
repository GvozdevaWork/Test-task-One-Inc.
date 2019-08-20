using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VacationDistribution.Models.Entities
{
    public class Vacation
    {
        /// <summary>
        /// Идентификатор записи об отпуске
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Идентификатор сотрудника
        /// </summary>
        public int EmployeeId { get; set; }

        /// <summary>
        /// Идентификатор сотрудника
        /// </summary>
        public Employee Employee { get; set; }

        /// <summary>
        /// Дата начала отпуска
        /// </summary>
        public DateTime StartDate { get; set; }

        /// <summary>
        /// Дата конца отпуска
        /// </summary>
        public DateTime EndDate { get; set; }
    }
}
