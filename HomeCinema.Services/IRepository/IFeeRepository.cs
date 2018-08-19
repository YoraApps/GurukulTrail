using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface IFeeRepository
    {
        List<FeeDs> GetAllFee();
        bool CreateFee(FeeDs feeDs);
        FeeDs GetFeeId(int? FeeId);
        bool RemoveFee(int? FeeId);
    }
}
