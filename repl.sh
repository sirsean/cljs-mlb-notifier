#!/bin/bash
rlwrap -r -q '\"' -b "(){}[],^%3@\";:'" lein trampoline noderepl
