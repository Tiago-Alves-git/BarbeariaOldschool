public class Barbeiro
{
  public int Id { get; set; }
  public string Nome { get; set; }
  public List<Agendamento> Agendamentos { get; set; }
}

public class Servico
{
  public int Id { get; set; }
  public string Nome { get; set; }
  public decimal Preco { get; set; }
}

public class Agendamento
{
  public int Id { get; set; }
  public int BarbeiroId { get; set; }
  public Barbeiro Barbeiro { get; set; }
  public DateTime Horario { get; set; }
  public int ServicoId { get; set; }
  public Servico Servico { get; set; }
  public string Status { get; set; }
}
