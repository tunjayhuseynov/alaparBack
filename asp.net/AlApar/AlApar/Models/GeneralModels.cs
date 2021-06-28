using Microsoft.EntityFrameworkCore;

namespace AlApar.Models
{
    public class GeneralModels
    {
        public static void generateGeneralModels(in ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LastSharedTimes>(entity =>
            {
                entity.ToTable("last_shared_times");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
            });

            modelBuilder.Entity<Currency>(entity => {

                entity.ToTable("currency");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");
                entity.Property(w => w.Rate).HasColumnName("rate");

            });

            modelBuilder.Entity<Cities>(entity => {

                entity.ToTable("cities");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AdStatuses>(entity => {

                entity.ToTable("adStatuses");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });

            modelBuilder.Entity<AdPackages>(entity => {

                entity.ToTable("adPackages");
                entity.Property(w => w.Id).HasColumnName("id");
                entity.Property(w => w.Name).HasColumnName("name");

            });
        }
    }
}
