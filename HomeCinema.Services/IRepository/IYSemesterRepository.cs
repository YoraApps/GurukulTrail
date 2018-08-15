using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
  public interface IYSemesterRepository
  {
    List<SemesterMasterDs> GetAllSemester();
    SemesterMasterDs GetSemesterById(int Id);
    bool UpdateSemester(SemesterMasterDs semesterMasterDs);
    bool RemoveSemester(int? id);

  }
}
