using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class SemesterMasterDs
  {
    public int SemesterId { get; set; }
    public string SemesterCode { get; set; }
    public string SemesterName { get; set; }
    public int? SKS { get; set; }
    public int? UniversityId { get; set; }
    public bool active { get; set; }
    public DateTime? lastupdateddt { get; set; }
    public int lastupdatedby { get; set; }
  }
}
