using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
  public interface IExaminationTypeRepository
  {
    List<ExaminationTypeDs> getAllExaminationType();
    bool updateExaminationType(ExaminationTypeDs examinationTypeDs);
    bool removeExaminationtype(int? id);
    ExaminationTypeDs getExaminationTypeById(int? id);
  }
}
