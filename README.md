# fepishare
filesharing with password

To use this program you need to clone or download this repo and execute `npm i`.

Also required is a file with the name `.env` in the root directory of the cloned repo.

Values for .env are:
- PWHASH="..." the custom hash of your password you want to use to secure your uploads (so nobody can fill up your hdd)

How to generate: 
```
function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}
```
Copy this code into your browser javascript console and execute
```
hashCode("yourpassword");
```

## NOTE:

Uploaded files are not listed after a restart, but are still saved.

Uploaded files are auto-removed after 24h.
