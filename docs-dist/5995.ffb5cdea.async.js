"use strict";(self.webpackChunknovojs_kit=self.webpackChunknovojs_kit||[]).push([[5995],{25995:function(a,e,n){n.r(e),n.d(e,{default:function(){return t}});var t=[Object.freeze({displayName:"Rel",name:"rel",patterns:[{include:"#strings"},{include:"#comment"},{include:"#single-line-comment-consuming-line-ending"},{include:"#deprecated-temporary"},{include:"#operators"},{include:"#symbols"},{include:"#keywords"},{include:"#otherkeywords"},{include:"#types"},{include:"#constants"}],repository:{comment:{patterns:[{begin:"/\\*\\*(?!/)",beginCaptures:{0:{name:"punctuation.definition.comment.rel"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.rel"}},name:"comment.block.documentation.rel",patterns:[{include:"#docblock"}]},{begin:"(/\\*)(?:\\s*((@)internal)(?=\\s|(\\*/)))?",beginCaptures:{1:{name:"punctuation.definition.comment.rel"},2:{name:"storage.type.internaldeclaration.rel"},3:{name:"punctuation.decorator.internaldeclaration.rel"}},end:"\\*/",endCaptures:{0:{name:"punctuation.definition.comment.rel"}},name:"comment.block.rel"},{begin:'doc"""',end:'"""',name:"comment.block.documentation.rel"},{begin:"(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.rel"},2:{name:"comment.line.double-slash.rel"},3:{name:"punctuation.definition.comment.rel"},4:{name:"storage.type.internaldeclaration.rel"},5:{name:"punctuation.decorator.internaldeclaration.rel"}},contentName:"comment.line.double-slash.rel",end:"(?=$)"}]},constants:{patterns:[{match:"(\\b(true|false)\\b)",name:"constant.language.rel"}]},"deprecated-temporary":{patterns:[{match:"@inspect",name:"keyword.other.rel"}]},keywords:{patterns:[{match:"(\\b(def|entity|bound|include|ic|forall|exists|\u2200|\u2203|return|module|^end)\\b)|(((\\<)?\\|(\\>)?)|\u2200|\u2203)",name:"keyword.control.rel"}]},operators:{patterns:[{match:"(\\b(if|then|else|and|or|not|eq|neq|lt|lt_eq|gt|gt_eq)\\b)|(\\+|\\-|\\*|\\/|\xF7|\\^|\\%|\\=|\\!\\=|\u2260|\\<|\\<\\=|\u2264|\\>|\\>\\=|\u2265|\\&)|\\s+(end)",name:"keyword.other.rel"}]},otherkeywords:{patterns:[{match:"\\s*(@inline)\\s*|\\s*(@auto_number)\\s*|\\s*(function)\\s|(\\b(implies|select|from|\u2208|where|for|in)\\b)|(((\\<)?\\|(\\>)?)|\u2208)",name:"keyword.other.rel"}]},"single-line-comment-consuming-line-ending":{begin:"(^[ \\t]+)?((//)(?:\\s*((@)internal)(?=\\s|$))?)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.rel"},2:{name:"comment.line.double-slash.rel"},3:{name:"punctuation.definition.comment.rel"},4:{name:"storage.type.internaldeclaration.rel"},5:{name:"punctuation.decorator.internaldeclaration.rel"}},contentName:"comment.line.double-slash.rel",end:"(?=^)"},strings:{begin:'"',end:'"',name:"string.quoted.double.rel",patterns:[{match:"\\\\.",name:"constant.character.escape.rel"}]},symbols:{patterns:[{match:"(:[\\[_$[:alpha:]](\\]|[_$[:alnum:]]*))",name:"variable.parameter.rel"}]},types:{patterns:[{match:"(\\b(Symbol|Char|Bool|Rational|FixedDecimal|Float16|Float32|Float64|Int8|Int16|Int32|Int64|Int128|UInt8|UInt16|UInt32|UInt64|UInt128|Date|DateTime|Day|Week|Month|Year|Nanosecond|Microsecond|Millisecond|Second|Minute|Hour|FilePos|HashValue|AutoNumberValue)\\b)",name:"entity.name.type.rel"}]}},scopeName:"source.rel"})]}}]);
