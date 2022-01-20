using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPWebApp.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public float assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public float groupprojects { get; set; }
        [Required]
        [Range(0, 100)]
        public float quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public float exams { get; set; }
        [Required]
        [Range(0, 100)]
        public float intex { get; set; }

    }
}
