  client.on("guildMemberAdd", async (member) => {
    client.channels.cache.get("926879364350619708").send(`<t:${moment(Date.now()).locale("tr").format("X")}:R> <:wonda_join:922043384993021972> ${member.user.tag} (\`${member.id}\`) katıldı. \`${member.guild.memberCount}\` kişi olduk.`);
  })
 

  client.on("guildMemberRemove", async (member) => {
    client.channels.cache.get("926879365466308648").send(`<t:${moment(Date.now()).locale("tr").format("X")}:R> <:wonda_leave:922043384959496192> ${member.user.tag} (\`${member.id}\`) ayrıldı. \`${member.guild.memberCount}\` kişi olduk.`);
  })
 
