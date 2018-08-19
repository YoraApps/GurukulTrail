using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class ProgramStusdyMaster
    {
        public int ProgramStudyId { get; set; }
        public string ProgramStudyCode { get; set; }
        public string ProgramStudyName { get; set; }
        public string AcademicTerm { get; set; }
        public int SKS { get; set; }
        public int Status { get; set; }
        public string UniversityId { get; set; }
        public int active { get; set; }
        public DateTime lastupdateddt { get; set; }
        public int lastupdatedby { get; set; }
        public int Id { get; set; }
    }
}
