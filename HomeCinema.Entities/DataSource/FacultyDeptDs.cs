using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class FacultyDeptDs
  {
    public int FacultyDeptId { get; set; }
    public string FacultyDeptCode { get; set; }
    public string FacultyDeptName { get; set; } 
    public string FacultyDeptDescription { get; set; }
    public int UniversityId { get; set; }
    public DateTime lastupdateddt { get; set; }
    public int lastupdatedby { get; set; }
    public int Active { get; set; }
  }
}
