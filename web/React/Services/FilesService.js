function CopyFile(User, File) {
    var destination = IO.newFile('./'+User, '');
    File.copyTo(destination, File.name);
}