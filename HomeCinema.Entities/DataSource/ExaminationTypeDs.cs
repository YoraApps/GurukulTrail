using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
   public class ExaminationTypeDs
  {
    public int ExaminationTypeId { get; set; }
    public string ExamGroup { get; set; }
    public string ExamName { get; set; }
    public int? MinMarks { get; set; }
    public int? MaxMarks { get; set; }
    public string FeeLabel { get; set; }
    public decimal Amount { get; set; }
    public int? UniversityId { get; set; }
    public int? Active { get; set; }
    public DateTime lastupdateddt { get; set; }
    public int? lastupdatedby { get; set; }
  }
}
