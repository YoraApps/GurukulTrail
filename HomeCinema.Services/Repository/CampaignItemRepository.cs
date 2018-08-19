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
    public class CampaignItemRepository : ICampaignItemRepository
    {
        private IDbConnection _db;
        public CampaignItemRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }

        public List<CampaignItemDs> GetAllCampaignItem()
        {
            return this._db.Query<CampaignItemDs>("Ysp_GetCampaignItem", commandType: CommandType.StoredProcedure).ToList();
        }

        public CampaignItemDs GetByCampaignItemId(int? CampaignItemId)
        {
            DynamicParameters param = new DynamicParameters();

            param.Add("@CampaignItemId", CampaignItemId);
            return _db.Query<CampaignItemDs>("Ysp_GetByCampaignItemId", param, commandType: CommandType.StoredProcedure).SingleOrDefault();
        }

        public bool UpdateCampaignItem(CampaignItemDs campaignItemDs)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@CampaignItemId", campaignItemDs.CampaignItemId);
            param.Add("@CampaignId", campaignItemDs.CampaignId);
            param.Add("@ItemName", campaignItemDs.ItemName);
            param.Add("@Price", campaignItemDs.Price);
            param.Add("@Remarks", campaignItemDs.Remarks);

            _db.Open();
            var val = _db.Execute("Ysp_createCampaignItem", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }
    }
}
