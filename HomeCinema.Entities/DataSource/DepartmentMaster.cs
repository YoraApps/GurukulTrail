using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class DepartmentMaster
    {
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public int UniversityId { get; set; }
        public int Active { get; set; }
        public DateTime lastupdateddt { get; set; }
        public int lastupdatedby { get; set; }
    }
}
