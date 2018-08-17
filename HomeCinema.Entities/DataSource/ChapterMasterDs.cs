using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class ChapterMasterDs
  {
    public int ChapterId { get; set; }
    public string ChapterNumber { get; set; }
    public string ChapterTitle { get; set; }
    public string ModeOfTeaching { get; set; }
    public string ChapterDetails { get; set; }
    public int SKS { get; set; }
    public int UniversityId { get; set; }
    public int active { get; set; }
    public DateTime lastupdateddt { get; set; }
    public int lastupdatedby { get; set; }
  }
}

