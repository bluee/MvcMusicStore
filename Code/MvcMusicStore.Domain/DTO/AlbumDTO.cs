using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MvcMusicStore.Domain.DTO
{
    public class AlbumDTO
    {
        public int AlbumId { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string Artist { get; set; } //For demo purpose we keep this as a string than an Id
        public string Genre { get; set; } //For demo purpose we keep this as a string than an Id
    }

    public class AlbumCreateDTO
    {
        [Required]
        [StringLength(160)]
        public string Title { get; set; }
        [Required]
        [Range(0, 999)]
        [Column(TypeName = "numeric")]
        public decimal Price { get; set; }
        [Required]
        public int ArtistId { get; set; }
        [Required]
        public int GenreId { get; set; } 
    }

}