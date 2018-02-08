# practice-majesty-of-vuejs
Examples and Homework included in the majesty of Vue.js 2 book


# Chapter 10 Apis Setup
You need php and composer follow below link for installation
http://kizu514.com/blog/install-php7-and-composer-on-windows-10/

1) Install php-7.1.14-Win32-VC14-x64 http://windows.php.net/download#php-7.1
3) copy php.ini-development to php.ini
4) uncomment extension_dir = "ext" on line 738 from phpt.ini
2) Install Composer from https://getcomposer.org/download/
5) for sqlite uncomment extension = php_pdo_sqlite.dll from line 913
6) Then run the sh setup.sh command from stories directory

# Chapter 11 To avoid cors add below to index.php in stories/public directory

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
