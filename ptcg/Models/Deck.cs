namespace ptcg.Interfaces;

public class Deck : IHasCreator
{
  public string CreatorId { get ; set ; }
  public Profile Creator { get ; set ; }
  public int Id { get ; set ; }
  public DateTime CreatedAt { get ; set ; }
  public DateTime UpdatedAt { get ; set ; }
}