using Dapper;
using HomeCinema.Entities;
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
   public class VehicleMasterRepository : IVehicleMasterrepository
    {
        private IDbConnection _db;
        public VehicleMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }

        public List<VehicleMasterDs> GetAllVehicleMasterDsRepository()
        {
            return this._db.Query<VehicleMasterDs>("YSP_GetAllVehicleMaster", commandType: CommandType.StoredProcedure).ToList();
        }

        public VehicleMasterDs GetSingleVehicleMasterDs(int? id)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@VehicleId", id);

            return _db.Query<VehicleMasterDs>("YSP_SingleVehicleMaster", param, commandType: CommandType.StoredProcedure).SingleOrDefault();

        }

        public bool RemoveVehicleMasterDs(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@VehicleId", id);
            _db.Open();
            var val = _db.Execute("YSP_RemoveVehicleMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }

        public bool UpdateVehicleMasterDs(VehicleMasterDs vehicleMasterDs)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@UniversityId", vehicleMasterDs.UniversityId);
            param.Add("@VehicleId", vehicleMasterDs.VehicleId);
            param.Add("@RegistrationNumber", vehicleMasterDs.RegistrationNumber);
            param.Add("@Description", vehicleMasterDs.Description);
            param.Add("@OwnerNumber", vehicleMasterDs.OwnerNumber);
            param.Add("@WeightCapacity", vehicleMasterDs.WeightCapacity);
            param.Add("@VehicleStatus", vehicleMasterDs.VehicleStatus);
            param.Add("@RegistrationDate", DateTime.Today);
            param.Add("@InsuranceDetails", vehicleMasterDs.InsuranceDetails);
            param.Add("@InsuranceExpiryDate", DateTime.Today);
            param.Add("@Active", 1);
            param.Add("@lastupdateddt",DateTime.UtcNow);
            param.Add("@lastupdatedby", 1);


            _db.Open();
            var val = _db.Execute("YSP_UpdateVehicleMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }
    }
}
