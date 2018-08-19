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
  public class ExaminationTypeRepository : IExaminationTypeRepository
  {
    public DateTime now = DateTime.Now;
    private IDbConnection db;
    public ExaminationTypeRepository()
    {
      db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
    }
    public List<ExaminationTypeDs> getAllExaminationType()
    {
      return this.db.Query<ExaminationTypeDs>("Ysp_GetAllExaminationType", commandType: CommandType.StoredProcedure).ToList();
    }

    public ExaminationTypeDs getExaminationTypeById(int? id)
    {
      DynamicParameters param = new DynamicParameters();
      param.Add("@ExaminationTypeId", id);
      return this.db.Query<ExaminationTypeDs>("Ysp_GetExaminationTypeById", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
    }

    public bool removeExaminationtype(int? id)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@ExaminationTypeId", id);
      db.Open();
      var val = db.Execute("Ysp_DeleteExaminationType", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      db.Close();
      return returnvalue;
    }

    public bool updateExaminationType(ExaminationTypeDs examinationTypeDs)
    {
      bool returnvalue = false;

      DynamicParameters param = new DynamicParameters();

      param.Add("@ExaminationTypeId", examinationTypeDs.ExaminationTypeId);
      param.Add("@ExamGroup", examinationTypeDs.ExamGroup);
      param.Add("@ExamName", examinationTypeDs.ExamName);
      param.Add("@MinMarks", examinationTypeDs.MinMarks);
      param.Add("@MaxMarks", examinationTypeDs.MaxMarks);
      param.Add("@FeeLabel", examinationTypeDs.FeeLabel);
      param.Add("@Amount", examinationTypeDs.Amount);
      param.Add("@UniversityId", examinationTypeDs.UniversityId);
      param.Add("@Active", 1);
      param.Add("@lastupdateddt", DateTime.UtcNow);
      param.Add("@lastupdatedby", examinationTypeDs.lastupdatedby);
      db.Open();
      var val = db.Execute("Ysp_UpdateExaminationType", param, commandType: CommandType.StoredProcedure);

      if (val > 0)
      {
        returnvalue = true;
      }

      db.Close();
      return returnvalue;
    } 
  }
}
