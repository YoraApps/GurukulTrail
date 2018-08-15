using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities.DataSource;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;

namespace HomeCinema.Services.Repository
{
  public class YSemesterRepository : IYSemesterRepository
  {
    public DateTime now = DateTime.Now;
    private IDbConnection _db;
    public YSemesterRepository()
    {
      _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
    }
    public List<SemesterMasterDs> GetAllSemester()
    {
      return this._db.Query<SemesterMasterDs>("Ysp_GetAllSemesterMaster", commandType: CommandType.StoredProcedure).ToList();
    }

    public SemesterMasterDs GetSemesterById(int id)
    {
      DynamicParameters param = new DynamicParameters();

      param.Add("@Id", id);
      return this._db.Query<SemesterMasterDs>("Ysp_GetSemesterById", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
     
    }

    public bool RemoveSemester(int? id)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@SemesterId", id);
      _db.Open();
      var val = _db.Execute("Ysp_DeleteSemesterMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      _db.Close();
      return returnvalue;

    }

    public bool UpdateSemester(SemesterMasterDs semesterMasterDs)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@SemesterId", semesterMasterDs.SemesterId); 
      param.Add("@SemesterCode", semesterMasterDs.SemesterCode);
      param.Add("@SemesterName", semesterMasterDs.SemesterName);
      param.Add("@SKS", semesterMasterDs.SKS);
      param.Add("@UniversityId", semesterMasterDs.UniversityId);
      param.Add("@active", semesterMasterDs.active);
      param.Add("@lastupdateddt", DateTime.UtcNow);
      param.Add("@lastupdatedby", semesterMasterDs.lastupdatedby);

      _db.Open();
      var val = _db.Execute("Ysp_UpdateSemesterMaster", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      _db.Close();
      return returnvalue;
    }
  }
}
