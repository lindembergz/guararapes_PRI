using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace LukeSkywalker.viewmodels

{
    [Keyless]
    [Table("vwPeoplePlanets")]
    public partial class vwPeoplePlanets
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("name", TypeName = "varchar(200)")]
        public string Name { get; set; }

        [Column("gender", TypeName = "varchar(200)")]
        public string Gender { get; set; }

        [Column("population", TypeName = "varchar(200)")]
        public int Population { get; set; }
    }
}
