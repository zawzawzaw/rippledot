import os
# build by jairus cause he was lazy to keep pasting the same code over and over again ^__^
# should work on both pc and mac

python_build_file = 'closure-library/closure/bin/build/depswriter.py'
python_command = ('python ' + python_build_file + ''
  '--root_with_prefix=../../js/manic ../../../../../js/manic/',
  '--root_with_prefix=../../js/manic/canvas ../../../../../js/manic/canvas/',
  '--root_with_prefix=../../js/manic/framework ../../../../../js/manic/framework/',
  '--root_with_prefix=../../js/manic/google ../../../../../js/manic/google/',
  '--root_with_prefix=../../js/manic/page ../../../../../js/manic/page/',
  '--root_with_prefix=../../js/manic/ui ../../../../../js/manic/ui/',
  '--root_with_prefix=../../js/manic/util ../../../../../js/manic/util/',
  '--root_with_prefix=../../js/manic/video ../../../../../js/manic/video/',
  '--root_with_prefix=../../js/rippledot/page ../../../../../js/rippledot/page/',
  '--root_with_prefix=../../js/rippledot/component ../../../../../js/rippledot/component/',
  '--output_file=../../js/google-closure-dependency-list.js')

os.system(python_command)