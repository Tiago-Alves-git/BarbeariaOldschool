public class BarberShopContext : DbContext
{
  public BarberShopContext(DbContextOptions<BarberShopContext> options) : base(options) { }

  public DbSet<Barbeiro> Barbeiros { get; set; }
  public DbSet<Servico> Servicos { get; set; }
  public DbSet<Agendamento> Agendamentos { get; set; }
}
