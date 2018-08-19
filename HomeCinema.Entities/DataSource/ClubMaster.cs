using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class ClubMaster
    {
        public int ClubId { get; set; }
        public string @ClubName { get; set; }
        public string @ClubDescription { get; set; }
        public int Active { get; set; }
        public DateTime lastupdateddt { get; set; }
        public int lastupdatedby { get; set; }
    }
}
