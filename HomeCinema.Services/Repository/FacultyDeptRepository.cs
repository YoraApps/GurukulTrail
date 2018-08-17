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
  public class FacultyDeptRepository : IFacultyDeptRepository
  {
    private IDbConnection db;
    public FacultyDeptRepository()
    {
      db=new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
    }
    public List<FacultyDeptDs> getAllFacultyDept()
    {
      return this.db.Query<FacultyDeptDs>("Ysp_GetAllFacultyDept", commandType: CommandType.StoredProcedure).ToList();
    }

    public FacultyDeptDs getFacultyDeptById(int? id)
    {
      DynamicParameters param= new DynamicParameters();
      param.Add("FacultyDeptId", id);
      return this.db.Query<FacultyDeptDs>("Ysp_GetFacultyDeptById", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
    }

    public bool removeFacultyDept(int? id)
    {
      bool returnvalue = false;
      DynamicParameters param= new DynamicParameters();
      param.Add("FacultyDeptId", id);
      db.Open();
      var val = db.Execute("Ysp_DeleteFacultyDept", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      db.Close();
      return returnvalue;
    }

    public bool updateFacultyDept(FacultyDeptDs facultyDeptDs)
    {
      bool returnValue = false;
      DynamicParameters param = new DynamicParameters();
      param.Add("FacultyDeptId", facultyDeptDs.FacultyDeptId);
      param.Add("FacultyDeptCode", facultyDeptDs.FacultyDeptCode);
      param.Add("FacultyDeptName", facultyDeptDs.FacultyDeptName);
      param.Add("FacultyDeptDescription", facultyDeptDs.FacultyDeptDescription);
      param.Add("UniversityId", facultyDeptDs.UniversityId);
      param.Add("lastupdateddt", DateTime.UtcNow);
      param.Add("lastupdatedby", facultyDeptDs.lastupdatedby);
      db.Open();
      var val = this.db.Execute("Ysp_UpdateFacultyDept", param, commandType: CommandType.StoredProcedure);
       if(val>0)
      {
        returnValue = true;
      }
      db.Close();
      return returnValue ;

    }
  }
}
