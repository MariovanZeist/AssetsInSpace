# AssetsInSpace

This repository is created to demonstrate an issue with the ``Microsoft.AspnetCore.ClientAssets``

It will build fine when the project path has no spaces in them, but as soon as the project is located on a path with spaces in them, the build will break.

The Second project (``AssetsInSpaceTheSequal``) will build regardless, and has the proposed change applied.

See https://github.com/aspnet/AspLabs/pull/405
