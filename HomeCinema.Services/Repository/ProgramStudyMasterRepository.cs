using Dapper;
using HomeCinema.Entities.DataSource;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.Repository
{
    public class ProgramStudyMasterRepository : IProgramStudyMasterRepository
    {
        private IDbConnection db;
        public ProgramStudyMasterRepository()
        {
            db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }
        public List<ProgramStusdyMaster> GetAllProgramStudyMasterRepository()
        {
            return this.db.Query<ProgramStusdyMaster>("Ysp_GetallProgramStudy", commandType: CommandType.StoredProcedure).ToList();
        }

        public ProgramStusdyMaster getProgramStudyMasterId(int ProgramStudyId)
        {
            DynamicParameters param = new DynamicParameters();

            param.Add("@ProgramStudyId", ProgramStudyId);
            return this.db.Query<ProgramStusdyMaster>("Ysp_GetSingleId", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
        }

        public bool RemoveProgramStudyMaster(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@ProgramStudyId", id);
            db.Open();
            var val = db.Execute("Ysp_RemoveProgramStudy", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            db.Close();
            return returnvalue;
        }

        public bool UpdateProgramStudyMaster(ProgramStusdyMaster programStudyMaster)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@ProgramStudyId", programStudyMaster.ProgramStudyId);
            param.Add("@ProgramStudyCode", programStudyMaster.ProgramStudyCode);
            param.Add("@ProgramStudyName", programStudyMaster.ProgramStudyName);
            param.Add("@AcademicTerm", programStudyMaster.AcademicTerm);
            param.Add("@SKS", programStudyMaster.SKS);
            param.Add("@Status", programStudyMaster.Status);
            param.Add("@UniversityId", programStudyMaster.UniversityId);
            param.Add("@active", 1);
            param.Add("@lastupdateddt", DateTime.UtcNow);
            param.Add("@lastupdatedby", programStudyMaster.lastupdatedby);


            db.Open();
            var val = db.Execute("Ysp_createProgramStudy", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            db.Close();
            return returnvalue;
        }
    }
}