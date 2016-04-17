# Wunderkuutio

A competition entry for http://www.wunderdog.fi/wunderkuutio/ by Anssi Kinnunen (https://fi.linkedin.com/in/akinnunen).

## Used technologies, tools and practices

- JavasScript, ES6, Babel, Node.js, Mocha, JSHint
- Ruby (1.8.7 because it's pre-installed in the hashicorp/precise64 box I used)
- Ansible, shell scripting, Vagrant, Virtualbox
- TDD

## Results

Found a total of **1119** words (see RESULTS.md) in **8736 ms**.

## Implementation explained shortly

1. on `npm test` a ruby script reads the two raw txt files and generates two json files; one for words and one for the cube
  - words that contain characters which are not present in the cube are filtered out (less work for JavaScript)
2. the cube letters are mapped to x, y and z coordinate space
3. letter chains are processed recursively

More detailed info in `finder.js` and tests.

## Elegancy

What makes my entry very elegant is how the all the above mentioned tools are used together :) The project can be run in a matter of minutes after cloning with these simple steps (as long as Vagrant and VirtualBox are installed):

- `git clone git@bitbucket.org:aekinnunen/wunderkuutio.git` (currently private)
- `cd wunderkuutio`
- `vagrant up`
- `vagrant ssh`
- `cd /vagrant`
- `npm test`

Getting rid of the project is even easier:

- `exit`
- `vagrant destroy`

And at this point your computer is clean again. Nothing had to be installed or removed \o/

## Contact info

- Anssi Kinnunen
- anssi.kinnunen@gmail.com
- +358 40 5614 927
