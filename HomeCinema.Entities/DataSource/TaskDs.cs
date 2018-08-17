using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
   public class TaskDs
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public int TaskDuration { get; set; }
        public int? UniversityId { get; set; }
        public bool Active { get; set; }
        public DateTime? lastupdateddt { get; set; }
        public int? lastupdatedby { get; set; }
        
    }
}
