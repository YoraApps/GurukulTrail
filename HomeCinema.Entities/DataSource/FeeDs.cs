using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class FeeDs
    {
        public int FeeId { get; set; }
        public string FeeLabel { get; set; }
        public double Amount { get; set; }
        public string FeeType { get; set; }
        public string Description { get; set; }
        public int UniversityId { get; set; }
        public bool active { get; set; }
        public DateTime lastupdateddt { get; set; }
        public int lastupdatedby { get; set; }
        public int CurrencyId { get; set; }
        public int FeeCategoryId { get; set; }
        public int CalculationType { get; set; }
    }
}
