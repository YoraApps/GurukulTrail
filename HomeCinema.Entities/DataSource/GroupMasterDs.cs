using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
   public class GroupMasterDs
    {
        public int GroupMasterId { get; set; }
        public string GroupCode { get; set; }
        public string GroupName { get; set; }
        public int UniversityId { get; set; }
        public bool Active { get; set; }
        public int lastupdatedby { get; set; }
        public DateTime lastupdateddt { get; set; }
    }
}
