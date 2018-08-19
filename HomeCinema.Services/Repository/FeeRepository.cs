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
    public class FeeRepository: IFeeRepository
    {
        private IDbConnection _db;
        public FeeRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }

        public bool CreateFee(FeeDs feeDs)
        {
            bool returnvalue = false;
            DynamicParameters param = new DynamicParameters();
            param.Add("@FeeId", feeDs.FeeId);
            param.Add("@FeeLabel", feeDs.FeeLabel);
            param.Add("@Amount", feeDs.Amount);
            param.Add("@FeeType", 1);
            param.Add("@Description", feeDs.Description);
            param.Add("@UniversityId", feeDs.UniversityId);
            param.Add("@active", feeDs.active);           
            param.Add("@lastupdateddt", DateTime.UtcNow);
            param.Add("@lastupdatedby", feeDs.lastupdatedby);
            param.Add("@CurrencyId", feeDs.CurrencyId);
            param.Add("@FeeCategoryId", feeDs.FeeCategoryId);
            param.Add("@CalculationType", feeDs.CurrencyId);

            var val = _db.Execute("USP_CreateFee", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
        }

        public List<FeeDs> GetAllFee()
        {
            return this._db.Query<FeeDs>("USP_GetAllFee", commandType: CommandType.StoredProcedure).ToList();
        }

        public FeeDs GetFeeId(int? FeeId)
        {
            DynamicParameters param = new DynamicParameters();

            param.Add("@FeeId", FeeId);
            return _db.Query<FeeDs>("USP_GetFeeId", param, commandType: CommandType.StoredProcedure).SingleOrDefault();

        }

        public bool RemoveFee(int? FeeId)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@FeeId", FeeId);
            var val = _db.Execute("USP_DeleteFee", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
        }
    }
}
