function validUserNames(userNames) {
    return userNames.filter(username => username.length < 10);
}
