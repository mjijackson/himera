goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__4787 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__4788 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__4787.call(this,separator);
case  2 :
return join__4788.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__4796 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__4797 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__4790 = s;
var limit__4791 = limit;
var parts__4792 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__4791,1)))
{return cljs.core.conj.call(null,parts__4792,s__4790);
} else
{var temp__3695__auto____4793 = cljs.core.re_find.call(null,re,s__4790);

if(cljs.core.truth_(temp__3695__auto____4793))
{var m__4794 = temp__3695__auto____4793;

var index__4795 = s__4790.indexOf(m__4794);

{
var G__4799 = s__4790.substring((index__4795 + cljs.core.count.call(null,m__4794)));
var G__4800 = (limit__4791 - 1);
var G__4801 = cljs.core.conj.call(null,parts__4792,s__4790.substring(0,index__4795));
s__4790 = G__4799;
limit__4791 = G__4800;
parts__4792 = G__4801;
continue;
}
} else
{return cljs.core.conj.call(null,parts__4792,s__4790);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__4796.call(this,s,re);
case  3 :
return split__4797.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__4802 = s.length;

while(true){
if(cljs.core.truth_((index__4802 === 0)))
{return "";
} else
{var ch__4803 = cljs.core.get.call(null,s,(index__4802 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____4804 = cljs.core._EQ_.call(null,ch__4803,"\n");

if(cljs.core.truth_(or__3548__auto____4804))
{return or__3548__auto____4804;
} else
{return cljs.core._EQ_.call(null,ch__4803,"\r");
}
})()))
{{
var G__4805 = (index__4802 - 1);
index__4802 = G__4805;
continue;
}
} else
{return s.substring(0,index__4802);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__4806 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____4807 = cljs.core.not.call(null,s__4806);

if(cljs.core.truth_(or__3548__auto____4807))
{return or__3548__auto____4807;
} else
{var or__3548__auto____4808 = cljs.core._EQ_.call(null,"",s__4806);

if(cljs.core.truth_(or__3548__auto____4808))
{return or__3548__auto____4808;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__4806);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__4809 = (new goog.string.StringBuffer());
var length__4810 = s.length;

var index__4811 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__4810,index__4811)))
{return buffer__4809.toString();
} else
{var ch__4812 = s.charAt(index__4811);

var temp__3695__auto____4813 = cljs.core.get.call(null,cmap,ch__4812);

if(cljs.core.truth_(temp__3695__auto____4813))
{var replacement__4814 = temp__3695__auto____4813;

buffer__4809.append(cljs.core.str.call(null,replacement__4814));
} else
{buffer__4809.append(ch__4812);
}
{
var G__4815 = (index__4811 + 1);
index__4811 = G__4815;
continue;
}
}
break;
}
});
