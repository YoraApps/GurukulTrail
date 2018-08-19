using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IProgramStudyMasterRepository
    {
        List<ProgramStusdyMaster> GetAllProgramStudyMasterRepository();
        ProgramStusdyMaster getProgramStudyMasterId(int ProgramStudyId);
        bool UpdateProgramStudyMaster(ProgramStusdyMaster programStudyMaster);
        bool RemoveProgramStudyMaster(int? id);
    }
}
