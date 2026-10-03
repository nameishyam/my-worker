using Microsoft.Extensions.Options;
using Server.Application.Configurations;
using Server.Application.Interfaces.Repository;
using Server.Domain.Entities;
using Server.Persistence.Context;

namespace Server.Persistence.Repositories;

public class UserRepository(
    ApplicationDbContext context,
    IOptions<ConnectionStrings> connectionStrings)
: BaseRepository<User>(connectionStrings.Value.DefaultConnection),
    IUserRepository
{

}