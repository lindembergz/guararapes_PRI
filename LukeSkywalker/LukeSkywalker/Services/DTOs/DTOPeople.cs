using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace LukeSkywalker.Service.DTO
{
    [Keyless]
    public partial class DTOPeople
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

    }
}
