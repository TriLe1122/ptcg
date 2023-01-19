namespace ptcg.Models;
using System;
using ptcg.Interfaces;


public class Profile : IDbItem<string>
{
  public string Id { get; set; }
  public string Name { get; set; }
  public string Picture { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime UpdatedAt { get; set; }
}

public class Account : Profile
{
  public string Email { get; set; }
}
