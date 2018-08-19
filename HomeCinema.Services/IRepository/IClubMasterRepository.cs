using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IClubMasterRepository
    {
        List<ClubMaster> GetAllClubMasterRepository();
        ClubMaster getClubMasterId(int ClubId);
        bool UpdateClubMaster(ClubMaster clubMaster);
        bool RemoveClubMaster(int? id);
    }
}
