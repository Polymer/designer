/**
 * @license
 * Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


// Copied from: https://developer.mozilla.org/en-US/docs/Template:CSSData?raw
// TODO: build step to download and build this file
define('polymer-designer/css/properties', () => ({
    "properties": {
        "animation": {
            "syntax": "&lt;single-animation-name&gt; || &lt;time&gt; || &lt;timing-function&gt; || &lt;time&gt; || &lt;single-animation-iteration-count&gt; || &lt;single-animation-direction&gt; || &lt;single-animation-fill-mode&gt; || &lt;single-animation-play-state&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": [
                "animation-name",
                "animation-duration",
                "animation-timing-function",
                "animation-delay",
                "animation-iteration-count",
                "animation-direction",
                "animation-fill-mode",
                "animation-play-state"
            ],
            "appliesto": "allElementsAndPseudos",
            "computed": [
                "animation-name",
                "animation-duration",
                "animation-timing-function",
                "animation-delay",
                "animation-direction",
                "animation-iteration-count",
                "animation-fill-mode",
                "animation-play-state"
            ],
            "order": "orderOfAppearance"
        },
        "animation-delay": {
            "syntax": "&lt;time&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>0s<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "animation-direction": {
            "syntax": "&lt;single-animation-direction&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "animation-duration": {
            "syntax": "&lt;time&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>0s<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "animation-fill-mode": {
            "syntax": "&lt;single-animation-fill-mode&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "animation-iteration-count": {
            "syntax": "&lt;single-animation-iteration-count&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>1<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "animation-name": {
            "syntax": "&lt;single-animation-name&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "animation-play-state": {
            "syntax": "&lt;single-animation-play-state&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>running<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "animation-timing-function": {
            "syntax": "&lt;timing-function&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Animations"
            ],
            "initial": "<code>ease<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "motion": {
            "syntax": "&lt;'motion-path'&gt; &amp;&amp; &lt;'motion-offset'&gt; &amp;&amp; &lt;'motion-rotation'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": [
                "motion-offset"
            ],
            "groups": [
                "CSS Motion"
            ],
            "initial": [
                "motion-path",
                "motion-offset",
                "motion-rotation"
            ],
            "appliesto": "allElementsSVGContainerElements",
            "computed": [
                "motion-path",
                "motion-offset",
                "motion-rotation"
            ],
            "order": "orderOfAppearance",
            "stacking": true
        },
        "motion-path": {
            "syntax": "&lt;url&gt; | [ &lt;basic-shape&gt; | &lt;path()&gt; ] || &lt;geometry-box&gt; | none",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Motion"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsSVGContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "stacking": true
        },
        "motion-offset": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the total path length",
                "de": "beziehen sich auf die Gesamtlänge des Pfads"
            },
            "groups": [
                "CSS Motion"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsSVGContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "motion-rotation": {
            "syntax": "[ auto | reverse ] &amp;&amp; &lt;angle&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "number"
            },
            "percentages": "no",
            "groups": [
                "CSS Motion"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElementsSVGContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "transition": {
            "syntax": "&lt;single-transition&gt;#",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transitions"
            ],
            "initial": [
                "transition-delay",
                "transition-duration",
                "transition-property",
                "transition-timing-function"
            ],
            "appliesto": "allElementsAndPseudos",
            "computed": [
                "transition-delay",
                "transition-duration",
                "transition-property",
                "transition-timing-function"
            ],
            "order": "orderOfAppearance"
        },
        "transition-delay": {
            "syntax": "&lt;time&gt;#",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transitions"
            ],
            "initial": "<code>0s<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "transition-duration": {
            "syntax": "&lt;time&gt;#",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transitions"
            ],
            "initial": "<code>0s<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "transition-property": {
            "syntax": "none | &lt;single-transition-property&gt;# [ \u2018,\u2019 &lt;single-transition-property&gt;# ]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transitions"
            ],
            "initial": "<code>all<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "transition-timing-function": {
            "syntax": "&lt;timing-function&gt;#",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transitions"
            ],
            "initial": "<code>ease<\/code>",
            "appliesto": "allElementsAndPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "transform": {
            "syntax": "none | &lt;transform-list&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "transform"
            },
            "percentages": "referToSizeOfBoundingBox",
            "groups": [
                "CSS Transforms"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "transformableElements",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder",
            "stacking": true
        },
        "transform-origin": {
            "syntax": "[ &lt;percentage&gt; | &lt;length&gt; | left | center | right | top | bottom] | [ [ &lt;percentage&gt; | &lt;length&gt; | left | center | right ] &amp;&amp; [ &lt;percentage&gt; | &lt;length&gt; | top | center | bottom ] ] &lt;length&gt;?",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "simpleList lpc"
            },
            "percentages": "referToSizeOfBoundingBox",
            "groups": [
                "CSS Transforms"
            ],
            "initial": "<code>50% 50% 0<\/code>",
            "appliesto": "transformableElements",
            "computed": {
                "en-US": "for {{xref_csslength}} the absolute value, otherwise a percentage",
                "de": "for {{xref_csslength}} the absolute value, otherwise a percentage",
                "fr": "pour une valeur de type {{xref_csslength}} sa valeur absolue, sinon un pourcentage",
                "ja": "{{xref_csslength}} \u306e\u5834\u5408\u306f\u7d76\u5bfe\u7684\u306a\u5024\u3001\u3055\u3082\u306a\u304f\u3070\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8"
            },
            "order": {
                "en-US": "One or two values, with length made absolute and keywords translated to percentages",
                "de": "One oder two values, with length made absolute undkeywords translated to percentages"
            }
        },
        "transform-style": {
            "syntax": "flat | preserve-3d",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transforms"
            ],
            "initial": "<code>flat<\/code>",
            "appliesto": "transformableElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "stacking": true
        },
        "transform-box": {
            "syntax": "border-box | fill-box | view-box",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transforms"
            ],
            "initial": "<code>border-box <\/code>",
            "appliesto": "transformableElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "perspective": {
            "syntax": "none | &lt;length&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Transforms"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "transformableElements",
            "computed": {
                "en-US": "the absolute length or <code>none<\/code>",
                "de": "the absolute length oder <code>none<\/code>",
                "fr": "la longueur absolue ou le mot-cl\u00e9 <code>none<\/code>",
                "ja": "\u7d76\u5bfe\u7684\u306a\u9577\u3055\u307e\u305f\u306f <code>none<\/code>"
            },
            "order": "uniqueOrder",
            "stacking": true
        },
        "perspective-origin": {
            "syntax": "[ &lt;percentage&gt; | &lt;length&gt; | left | center | right | top | bottom] | [ [ &lt;percentage&gt; | &lt;length&gt; | left | center | right ] &amp;&amp; [ &lt;percentage&gt; | &lt;length&gt; | top | center | bottom ] ]",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "simpleList lpc"
            },
            "percentages": "referToSizeOfBoundingBox",
            "groups": [
                "CSS Transforms"
            ],
            "initial": "<code>50% 50%<\/code>",
            "appliesto": "transformableElements",
            "computed": {
                "en-US": "for {{xref_csslength}} the absolute value, otherwise a percentage",
                "de": "for {{xref_csslength}} the absolute value, otherwise a percentage",
                "fr": "pour une valeur de type {{xref_csslength}} sa valeur absolue, sinon un pourcentage",
                "ja": "{{xref_csslength}} \u306e\u5834\u5408\u306f\u7d76\u5bfe\u7684\u306a\u5024\u3001\u3055\u3082\u306a\u304f\u3070\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8{{csscomputedenddef}}"
            },
            "order": {
                "en-US": "One or two values, with length made absolute and keywords translated to percentages",
                "de": "One oder two values, with length made absolute undkeywords translated to percentages"
            }
        },
        "backface-visibility": {
            "syntax": "visible | hidden",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Transforms"
            ],
            "initial": "<code>visible<\/code>",
            "appliesto": "transformableElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Colors"
            ],
            "initial": {
                "en-US": "Varies from one browser to another",
                "de": "Variiert von einem Browser zum anderen",
                "fr": "Varie d'un navigateur \u00e0 l'autre"
            },
            "appliesto": "allElements",
            "computed": {
                "en-US": "If the value is translucent, the computed value will be the <code>rgba()<\/code> corresponding one. If it isn't, it will be the <code>rgb()<\/code> corresponding one. The <code>transparent<\/code> keyword maps to <code>rgba(0,0,0,0)<\/code>.",
                "de": "Falls der Wert durchscheinend ist, ist der berechnete Wert der entsprechende <code>rgba()<\/code> Wert. Falls nicht, ist er der entsprechende <code>rgb()<\/code> Wert. Das <code>transparent<\/code> Schlüsselwort wird zu <code>rgb(0,0,0)<\/code>.",
                "fr": "si la valeur est translucide, la valeur calcul\u00e9e est la fonction <code>rgba()<\/code>correspondante. Sinon, la fonction <code>rgb()<\/code>correspondante. Le mot-cl\u00e9 <code>transparent<\/code> devient <code>rgb(0,0,0)<\/code>.",
                "ja": "\u534a\u900f\u660e\u306e\u5024\u306a\u3089\u3001\u8a08\u7b97\u5024\u306f\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b <code>rgba()<\/code>\u3002\u3055\u3082\u306a\u304f\u3070\u305d\u306e\u5024\u306b\u5bfe\u5fdc\u3059\u308b <code>rgb()<\/code>\u3002<code>transparent<\/code> \u30ad\u30fc\u30ef\u30fc\u30c9\u306f <code>rgba(0,0,0,0)<\/code> \u306b\u30de\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "opacity": {
            "syntax": "&lt;number&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "number"
            },
            "percentages": "no",
            "groups": [
                "CSS Colors"
            ],
            "initial": "<code>1.0<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "the specified value, clipped in the range <code>[0,1]<\/code>",
                "fr": "la valeur sp\u00e9cifi\u00e9e, \u00e9cr\u00eat\u00e9e \u00e0 l'intervalle <code>[0,1]<\/code>",
                "ja": "\u6307\u5b9a\u5024\u3002<code>[0,1]<\/code> \u306e\u7bc4\u56f2\u5185\u306b\u30af\u30ea\u30c3\u30d7\u3055\u308c\u307e\u3059"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::placeholder"
            ]
        },
        "columns": {
            "syntax": "&lt;'column-width'&gt; || &lt;'column-count'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "column-width",
                "column-count"
            ],
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": [
                "column-width",
                "column-count"
            ],
            "appliesto": "nonReplacedBlockElements",
            "computed": [
                "column-width",
                "column-count"
            ],
            "order": "orderOfAppearance"
        },
        "column-width": {
            "syntax": "&lt;length&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "nonReplacedBlockElements",
            "computed": {
                "en-US": "the absolute length, zero or larger",
                "de": "the absolute length, zero oder larger",
                "fr": "la valeur absolue valant z\u00e9ro ou plus",
                "ja": "ゼロ以上の絶対的な長さ"
            },
            "order": "uniqueOrder"
        },
        "column-count": {
            "syntax": "&lt;number&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "integer"
            },
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "nonReplacedBlockElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "column-gap": {
            "syntax": "&lt;length&gt; | normal",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "multicolElements",
            "computed": {
                "en-US": "the absolute length or the keyword <code>normal<\/code>",
                "de": "die absolute Länge oder das Schlüsselwort <code>normal<\/code>",
                "fr": "la longueur absolue ou le mot-cl\u00e9 <code>normal<\/code>",
                "ja": "\u7d76\u5bfe\u7684\u306a\u9577\u3055\u307e\u305f\u306f\u30ad\u30fc\u30ef\u30fc\u30c9 <code>normal<\/code>"
            },
            "order": "uniqueOrder"
        },
        "column-rule": {
            "syntax": "&lt;'column-rule-width'&gt; || &lt;'column-rule-style'&gt; || &lt;'column-rule-color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "column-rule-color",
                "column-rule-style",
                "column-rule-width"
            ],
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": [
                "column-rule-width",
                "column-rule-style",
                "column-rule-color"
            ],
            "appliesto": "multicolElements",
            "computed": [
                "column-rule-color",
                "column-rule-style",
                "column-rule-width"
            ],
            "order": "orderOfAppearance"
        },
        "column-rule-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>currentColor<\/code>",
            "appliesto": "multicolElements",
            "computed": "'color'",
            "order": "uniqueOrder"
        },
        "column-rule-style": {
            "syntax": "&lt;br-style&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "multicolElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "column-rule-width": {
            "syntax": "&lt;br-width&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "multicolElements",
            "computed": {
                "en-US": "an absolute length; <code>0<\/code> if the column rule style is <code>none<\/code> or <code>hidden<\/code>",
                "de": "an absolute length; <code>0<\/code> if the column rule style ist <code>none<\/code> oder <code>hidden<\/code>",
                "fr": "une longueur absolue ou <code>0<\/code> si {{cssxref(\"column-rule-style\")}} vaut <code>none<\/code> ou <code>hidden<\/code>",
                "ja": "\u7d76\u5bfe\u7684\u306a\u9577\u3055\u3002\u5217\u306e\u7f6b\u7dda\u306e\u30b9\u30bf\u30a4\u30eb\u304c <code>none<\/code> \u304b <code>hidden<\/code> \u306a\u3089 <code>0<\/code>"
            },
            "order": "uniqueOrder"
        },
        "break-before": {
            "syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
            "media": "paged",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "blockLevelElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "break-after": {
            "syntax": "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region",
            "media": "paged",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "blockLevelElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "break-inside": {
            "syntax": "auto | avoid | avoid-page | avoid-column | avoid-region",
            "media": "paged",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "blockLevelElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "column-span": {
            "syntax": "none | all",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": {
                "en-US": "in-flow block-level elements",
                "de": "in-flow block-level Elemente",
                "fr": "\u00e9l\u00e9ments de type bloc participant au flux",
                "ja": "フロート内に配置された、フローティングや絶対配置がなされていない全てのブロックレベル要素"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "column-fill": {
            "syntax": "auto | balance",
            "media": {
                "en-US": "<code>visual<\/code>, but, in continuous media, has no effect in overflow columns",
                "de": "<code>visual<\/code>, aber in kontinuierlichen Medien hat sie keinen Effekt in \u00fcberbut, in continuous media, has no effect in \u00fcberlaufenden Spalten",
                "ja": "<code>visual<\/code>。ただし連続メディアではオーバーフローした列に効果なし"
            },
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Columns"
            ],
            "initial": "<code>balance<\/code>",
            "appliesto": "multicolElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "hyphens": {
            "syntax": "none | manual | auto",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>manual<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "letter-spacing": {
            "syntax": "normal | &lt;length&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "an optimum value consisting of either an absolute length or the keyword <code>normal<\/code>",
                "de": "an optimum value consisting of either an absolute length oder the keyword <code>normal<\/code>",
                "fr": "une valeur optimale consistant en une longueur absolue ou <code>normal<\/code>"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line"
            ]
        },
        "word-wrap": {
            "syntax": "normal | break-word",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "overflow-wrap": {
            "syntax": "normal | break-word",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-transform": {
            "syntax": "none | capitalize | uppercase | lowercase | full-width",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "tab-size": {
            "syntax": "&lt;integer&gt; | &lt;length&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>8<\/code>",
            "appliesto": "blockContainers",
            "computed": {
                "en-US": "the specified integer or an absolute length",
                "de": "die angegebene Ganzzahl oder eine absolute Länge",
                "fr": "l'entier sp\u00e9cifi\u00e9 ou une longueur absolue",
                "ja": "\u6307\u5b9a\u3055\u308c\u305f\u6574\u6570\u5024\u307e\u305f\u306f\u7d76\u5bfe\u7684\u306a\u9577\u3055"
            },
            "order": "uniqueOrder"
        },
        "text-align": {
            "syntax": "start | end | left | right | center | justify | match-parent | start end",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": {
                "en-US": "<code>start<\/code>, or a nameless value that acts as <code>left<\/code> if {{cssxref(\"direction\")}} is <code>ltr<\/code>, <code>right<\/code> if {{cssxref(\"direction\")}} is <code>rtl<\/code> if <code>start<\/code> is not supported by the browser.",
                "en-US": "<code>start<\/code> oder ein namenloser Wert, der sich wie <code>left<\/code> verhält, falls {{cssxref(\"direction\")}} den Wert <code>ltr<\/code> hat, <code>right<\/code>, falls {{cssxref(\"direction\")}} den Wert <code>rtl<\/code> hat, falls <code>start<\/code> nicht vom Browser unterstützt wird.",
                "fr": "<code>start<\/code>, ou une valeur non nomm\u00e9e se comportant comme <code>left<\/code> si {{cssxref(\"direction\")}} est <code>ltr<\/code>, <code>right<\/code> si {{cssxref(\"direction\")}} est <code>rtl<\/code> si <code>start<\/code> n'est pas support\u00e9 par le navigateur",
                "ja": "<code>start<\/code>\u3002<code>start<\/code> \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u306a\u3044\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001{{cssxref(\"direction\", \"\u6587\u7ae0\u306e\u65b9\u5411\")}}\u304c <code>ltr<\/code> \u306a\u3089 <code>left<\/code>\u3001<code>rtl<\/code> \u306a\u3089 <code>right<\/code> \u3068\u3057\u3066\u52d5\u4f5c\u3059\u308b\u7121\u540d\u306e\u5024"
            },
            "appliesto": "blockContainers",
            "computed": {
                "en-US": "as specified, except for the <code>match-parent<\/code> value which is calculated against its parent's <code>direction<\/code> value and results in a computed value of either <code>left<\/code> or <code>right<\/code>",
                "de": "wie angegeben, außer für den <code>match-parent<\/code> Wert, welcher in Bezug auf den <code>direction<\/code> Wert des Elternelements berechnet wird und einen berechneten Wert von <code>left<\/code> oder <code>right<\/code> ergibt",
                "fr": "comme sp\u00e9cifi\u00e9, sauf pour la valeur <code>match-parent<\/code> qui est calcul\u00e9e en fonction de la <code>direction<\/code> du parent et qui vaut soit <code>left<\/code>, soit <code>right<\/code>",
                "ja": "\u6307\u5b9a\u5024\u3002\u305f\u3060\u3057 <code>match-parent<\/code> \u5024\u3092\u9664\u304f\u3002\u3053\u306e\u5024\u306f\u89aa\u8981\u7d20\u306e\u65b9\u5411\u306b\u3082\u3068\u3065\u3044\u3066\u8a08\u7b97\u3055\u308c\u3001\u8a08\u7b97\u5024\u304c\u5de6\u53f3\u3069\u3061\u3089\u306b\u3082\u306a\u308a\u307e\u3059"
            },
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::placeholder"
            ]
        },
        "text-align-last": {
            "syntax": "auto | start | end | left | right | center | justify",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "blockContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-indent": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; &amp;&amp; [ hanging || each-line ]",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "lpc"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "blockContainers",
            "computed": {
                "en-US": "the percentage as specified or the absolute length, plus any keywords as specified",
                "de": "der Prozentwert wie angegeben oder die absolute Länge plus Schlüsselwörter, falls angegeben",
                "fr": "le pourcentage tel que sp\u00e9cifi\u00e9 ou la longueur absolue, ainsi que les mots-cl\u00e9 comme sp\u00e9cifi\u00e9s",
                "ja": "\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8\u5024\u307e\u305f\u306f\u7d76\u5bfe\u7684\u306a\u9577\u3055\u3001\u7d9a\u3051\u3066\u6307\u5b9a\u3055\u308c\u305f\u4efb\u610f\u306e\u6570\u306e\u30ad\u30fc\u30ef\u30fc\u30c9"
            },
            "order": {
                "en-US": "The length or percentage before the keywords, if both are present. If several keywords are present, they appear in the same order as their appearance in the formal grammar.",
                "de": "Die Länge oder der Prozentwert vor den Schlüsselwörtern, falls beide angegeben wurden. Falls mehrere Schlüsselwörter angegeben wurden, erscheinen sie in derselben Reihenfolge, wie in der formellen Grammatik angegeben."
            }
        },
        "white-space": {
            "syntax": "normal | pre | nowrap | pre-wrap | pre-line",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "word-break": {
            "syntax": "normal | break-all | keep-all",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "word-spacing": {
            "syntax": "normal | &lt;length&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "length"
            },
            "percentages": {
                "en-US": "refer to the width of the affected glyph",
                "de": "bezieht sich auf die Breite des jeweiligen Zeichens",
                "fr": "se rapporte \u00e0 la largeur du glyphe concern\u00e9",
                "ja": "作用する glyph の width"
            },
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "an optimum, minimum, and maximum value, each consisting of either an absolute length, a percentage, or the keyword <code>normal<\/code>",
                "de": "an optimum, minimum, undmaximum value, each consisting of either an absolute length, a percentage, oder the keyword <code>normal<\/code>",
                "fr": "trois valeurs, optimale, minimale et maximale, chacune consitant en une longueur absolue, un pourcentage ou le mot-cl\u00e9 <code>normal<\/code>",
                "ja": "それぞれ絶対指定の length、percentage、キーワード <code>normal<\/code>のいずれかである、最適値、最小値、最大値"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "line-break": {
            "syntax": "auto | loose | normal | strict",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-size-adjust": {
            "syntax": "none | auto | &lt;percentage&gt; ",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": {
                "en-US": "yes, refer to the corresponding size of the text font"
            },
            "groups": [
                "CSS Text"
            ],
            "initial": {
                "en-US": " <code>auto<\/code> for smartphone browsers supporting inflation, <code>none<\/code> in other cases (and then not modifiable."
            },
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-decoration": {
            "syntax": "&lt;'text-decoration-line'&gt; || &lt;'text-decoration-style'&gt; || &lt;'text-decoration-color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "text-decoration-color",
                "text-decoration-style",
                "text-decoration-line"
            ],
            "percentages": "no",
            "groups": [
                "CSS Text Decoration"
            ],
            "initial": [
                "text-decoration-color",
                "text-decoration-style",
                "text-decoration-line"
            ],
            "appliesto": "allElements",
            "computed": [
                "text-decoration-line",
                "text-decoration-style",
                "text-decoration-color"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "text-decoration-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Text Decoration"
            ],
            "initial": "<code>currentColor<\/code>",
            "appliesto": "allElements",
            "computed": "'color'",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "text-decoration-style": {
            "syntax": "solid | double | dotted | dashed | wavy",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text Decoration"
            ],
            "initial": "<code>solid<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "text-decoration-line": {
            "syntax": "none | [ underline || overline || line-through || blink ]",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text Decoration"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "text-decoration-skip": {
            "syntax": "none | [ objects || spaces || ink || edges || box-decoration ]",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text Decoration"
            ],
            "initial": "<code>objects<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance"
        },
        "text-shadow": {
            "syntax": "none | &lt;shadow-t&gt;#",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "shadowList"
            },
            "percentages": "no",
            "groups": [
                "CSS Text Decoration"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "a color plus three absolute lengths",
                "ja": "\u8272\u3001\u7d9a\u3051\u3066\u7d76\u5bfe\u7684\u306a\u9577\u3055 3 \u3064"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "text-underline-position": {
            "syntax": "auto | [ under || [ left | right ] ]",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Text Decoration"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance"
        },
        "direction": {
            "syntax": "ltr | rtl",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Writing Modes"
            ],
            "initial": "<code>ltr<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "unicode-bidi": {
            "syntax": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Writing Modes"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": {
                "en-US": "all elements, though some values have no effect on non-inline elements",
                "de": "Alle Elemente, einige Werte haben keine Wirkung bei non-inline Elementen",
                "ja": "\u5168\u8981\u7d20\u3002\u305f\u3060\u3057\u4e00\u90e8\u306e\u5024\u306f\u30a4\u30f3\u30e9\u30a4\u30f3\u3067\u306a\u3044\u8981\u7d20\u306b\u306f\u52b9\u679c\u304c\u3042\u308a\u307e\u305b\u3093"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "writing-mode": {
            "syntax": "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Writing Modes"
            ],
            "initial": "<code>horizontal-tb<\/code>",
            "appliesto": {
                "en-US": "all elements except table row groups, table column groups, table rows, and table columns",
                "ja": "\u30c6\u30fc\u30d6\u30eb\u884c\u30b0\u30eb\u30fc\u30d7\u3001\u30c6\u30fc\u30d6\u30eb\u5217\u30b0\u30eb\u30fc\u30d7\u3001\u30c6\u30fc\u30d6\u30eb\u884c\u3001\u30c6\u30fc\u30d6\u30eb\u5217\u3092\u9664\u304f\u5168\u8981\u7d20"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-orientation": {
            "syntax": "mixed | upright | sideways",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Writing Modes"
            ],
            "initial": "<code>mixed<\/code>",
            "appliesto": {
                "en-US": "all elements, except table row groups, rows, column groups, and columns",
                "ja": "\u30c6\u30fc\u30d6\u30eb\u884c\u30b0\u30eb\u30fc\u30d7\u3001\u30c6\u30fc\u30d6\u30eb\u5217\u30b0\u30eb\u30fc\u30d7\u3001\u30c6\u30fc\u30d6\u30eb\u884c\u3001\u30c6\u30fc\u30d6\u30eb\u5217\u3092\u9664\u304f\u5168\u8981\u7d20"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-combine-upright": {
            "syntax": "none | all | [ digits &lt;integer&gt;? ]",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Writing Modes"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": {
                "en-US": "non-replaced inline elements",
                "ja": "\u975e\u7f6e\u63db\u30a4\u30f3\u30e9\u30a4\u30f3\u8981\u7d20"
            },
            "computed": {
                "en-US": "specified keyword, plus integer if 'digits'",
                "ja": "\u6307\u5b9a\u3055\u308c\u305f\u30ad\u30fc\u30ef\u30fc\u30c9\u3001'digits' \u306e\u5834\u5408\u306f\u7d9a\u3051\u3066\u6574\u6570"
            },
            "order": "uniqueOrder"
        },
        "align-content": {
            "syntax": "flex-start | flex-end | center | space-between | space-around | stretch",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>stretch<\/code>",
            "appliesto": {
                "en-US": "multi-line flex containers",
                "de": "mehrzeilige flexible Container",
                "fr": "conteneurs flexibles multi-lignes"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "align-items": {
            "syntax": "flex-start | flex-end | center | baseline | stretch",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>stretch<\/code>",
            "appliesto": "flexContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "align-self": {
            "syntax": "auto | flex-start | flex-end | center | baseline | stretch",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "flexItemsAndInFlowPseudos",
            "computed": {
                "en-US": "<code>auto<\/code> computes to itself on absolutely-positioned elements, and to the computed value of {{cssxref(\"align-items\")}} on the parent (minus any legacy keywords) on all other boxes, or <code>start<\/code> if the box has no parent. Its behavior depends on the layout model, as described for {{cssxref(\"justify-self\")}}. Otherwise the specified value.",
                "de": "<code>auto<\/code> berechnet sich zu sich selbst bei absolut positionierten Elementen und zum berechneten Wert von {{cssxref(\"align-items\")}} des Elternelements (abzüglich veralteter Schlüsselwörter) bei allen anderen Boxen oder <code>start<\/code>, falls die Box kein Elternelement hat. Sein Verhalten hängt vom Layoutmodell ab, wie für {{cssxref(\"justify-self\")}} beschrieben. Ansonsten der angegebene Wert."
            },
            "order": "uniqueOrder"
        },
        "flex-basis": {
            "syntax": "content | &lt;'width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the flex container's inner main size",
                "de": "bezieht sich auf die Hauptgr\u00f6\u00dfe des Flexcontainers",
                "fr": "se rapporte \u00e0 la principale taille interne du conteneur flexible"
            },
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "flexItemsAndInFlowPseudos",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": {
                "en-US": "the length or percentage before the keyword, if both are present",
                "de": "the length oder percentage before the keyword, if both are present"
            }
        },
        "flex-direction": {
            "syntax": "row | row-reverse | column | column-reverse",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>row<\/code>",
            "appliesto": "flexContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "flex-flow": {
            "syntax": "&lt;'flex-direction'&gt; || &lt;'flex-wrap'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": [
                "flex-direction",
                "flex-wrap"
            ],
            "appliesto": "flexContainers",
            "computed": [
                "flex-direction",
                "flex-wrap"
            ],
            "order": "orderOfAppearance"
        },
        "flex-grow": {
            "syntax": "&lt;number&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "number"
            },
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "flexItemsAndInFlowPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "flex-shrink": {
            "syntax": "&lt;number&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "number"
            },
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>1<\/code>",
            "appliesto": "flexItemsAndInFlowPseudos",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "flex": {
            "syntax": "none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ]",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "flex-grow",
                "flex-shrink",
                "flex-basis"
            ],
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": [
                "flex-grow",
                "flex-shrink",
                "flex-basis"
            ],
            "appliesto": "flexItemsAndInFlowPseudos",
            "computed": [
                "flex-grow",
                "flex-shrink",
                "flex-basis"
            ],
            "order": "orderOfAppearance"
        },
        "flex-wrap": {
            "syntax": "nowrap | wrap | wrap-reverse",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>nowrap<\/code>",
            "appliesto": "flexContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "justify-content": {
            "syntax": "flex-start | flex-end | center | space-between | space-around",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>flex-start<\/code>",
            "appliesto": "flexContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "order": {
            "syntax": "&lt;integer&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "integer"
            },
            "percentages": "no",
            "groups": [
                "CSS Flexible Box Layout"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": {
                "en-US": "flex items and absolutely-positioned flex container children",
                "de": "flexible items undabsolutely-positionierte flexible Container children",
                "fr": "\u00e9l\u00e9ments flexibles, ainsi que les enfants absolument positionn\u00e9s de conteneurs flexibles"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "background": {
            "syntax": "[ &lt;bg-layer&gt; , ]* &lt;final-bg-layer&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "background-color",
                "background-image",
                "background-clip",
                "background-position",
                "background-size",
                "background-repeat",
                "background-attachment"
            ],
            "percentages": [
                "background-position",
                "background-size"
            ],
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "background-image",
                "background-position",
                "background-size",
                "background-repeat",
                "background-origin",
                "background-clip",
                "background-attachment",
                "background-color"
            ],
            "appliesto": "allElements",
            "computed": [
                "background-image",
                "background-position",
                "background-size",
                "background-repeat",
                "background-origin",
                "background-clip",
                "background-attachment",
                "background-color"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-attachment": {
            "syntax": "&lt;attachment&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>scroll<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-clip": {
            "syntax": "&lt;box&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>border-box<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>transparent<\/code>",
            "appliesto": "allElements",
            "computed": "'color'",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-image": {
            "syntax": "&lt;bg-image&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "as specified, but with URIs made absolute",
                "fr": "comme sp\u00e9cifi\u00e9, mais avec les URI rendues absolues"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-origin": {
            "syntax": "&lt;box&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>padding-box<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-position": {
            "syntax": "&lt;position&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "repeatableList simpleList lpc"
            },
            "percentages": {
                "en-US": "refer to the size of the background positioning area minus size of background image; size refers to the width for horizontal offsets and to the height for vertical offsets",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe des Bereichs abz\u00fcglich der Gr\u00f6\u00dfe des Hintergrundbilds; die Gr\u00f6\u00dfe bezieht sich auf die vertikalen und horizontalen Verschiebungen",
                "fr": "se rapporte \u00e0 la taille de la zone de positionnement de l'arri\u00e8re-plan, moins la taille de l'image; la taille se rapporte \u00e0 la largeur pour les d\u00e9calages horizontaux et \u00e0 la hauteur pour les d\u00e9calages verticaux"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>0% 0%<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "a list, each item consisting of two keywords representing the origin and two offsets from that origin, each given as an absolute length (if given a {{xref_csslength}}), otherwise as a percentage",
                "de": "a list, each item consisting of two keywords representing the origin undtwo offsets from that origin, each given as an absolute length (if given a {{xref_csslength}}), otherwise as a percentage",
                "fr": "une liste dont chaque \u00e9l\u00e9ment consiste en deux mots-cl\u00e9 repr\u00e9sentant l'origine et deux offsets depuis cette origine, chacun \u00e9tant une longueur absolue (si sp\u00e9cifi\u00e9 comme une {{xref_csslength}}), ou un pourcentage"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-repeat": {
            "syntax": "&lt;repeat-style&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>repeat<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "a list, each item consisting of two keywords, one per dimension",
                "fr": "une liste dont chaque \u00e9l\u00e9ment consiste en deux mots-cl\u00e9, un par dimension"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "background-size": {
            "syntax": "&lt;bg-size&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "repeatableList simpleList lpc",
                "note": ". This means keyword values are not animatable."
            },
            "percentages": {
                "en-US": "relative to the background positioning area",
                "de": "bezieht sich auf den jeweiligen Bereich",
                "fr": "relatifs \u00e0 la zone de positionnement du fond"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>auto auto<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "border": {
            "syntax": "&lt;br-width&gt; || &lt;br-style&gt; || &lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-color",
                "border-style",
                "border-width"
            ],
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-width",
                "border-style",
                "border-color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-width",
                "border-style",
                "border-color"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-bottom": {
            "syntax": "&lt;br-width&gt; || &lt;br-style&gt; || &lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-bottom-color",
                "border-bottom-style",
                "border-bottom-width"
            ],
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-bottom-width",
                "border-bottom-style",
                "border-bottom-color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-bottom-width",
                "border-bottom-style",
                "border-bottom-color"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-bottom-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>currentColor<\/code>",
            "appliesto": "allElements",
            "computed": "'color'",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-bottom-left-radius": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the corresponding dimension of the border box",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe der Border-Box",
                "fr": "se rapporte \u00e0 la dimension correspondante de la bo\u00eete des bordures"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsUAsNotRequiredWhenCollapse",
            "computed": "twoAbsoluteLengthOrPercentages",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-bottom-right-radius": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the corresponding dimension of the border box",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe der Border-Box",
                "fr": "se rapporte \u00e0 la dimension correspondante de la bo\u00eete des bordures"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsUAsNotRequiredWhenCollapse",
            "computed": "twoAbsoluteLengthOrPercentages",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-bottom-style": {
            "syntax": "&lt;br-style&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-bottom-width": {
            "syntax": "&lt;br-width&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "the absolute length or <code>0<\/code> if {{cssxref(\"border-bottom-style\")}} is <code>none<\/code> or <code>hidden<\/code>",
                "de": "the absolute length oder <code>0<\/code> if {{cssxref(\"border-bottom-style\")}} ist <code>none<\/code> oder <code>hidden<\/code>",
                "fr": "la longueur absolue ou <code>0<\/code> si {{cssxref(\"border-bottom-style\")}} vaut <code>none<\/code> ou <code>hidden<\/code>"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-color": {
            "syntax": "&lt;color&gt;{1,4}",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-bottom-color",
                "border-left-color",
                "border-right-color",
                "border-top-color"
            ],
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-top-color",
                "border-right-color",
                "border-bottom-color",
                "border-left-color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-bottom-color",
                "border-left-color",
                "border-right-color",
                "border-top-color"
            ],
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-image": {
            "syntax": "&lt;'border-image-source'&gt; || &lt;'border-image-slice'&gt; [ \/ &lt;'border-image-width'&gt; | \/ &lt;'border-image-width'&gt;? \/ &lt;'border-image-outset'&gt; ]? || &lt;'border-image-repeat'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": [
                "border-image-slice",
                "border-image-width"
            ],
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-image-source",
                "border-image-slice",
                "border-image-width",
                "border-image-outset",
                "border-image-repeat"
            ],
            "appliesto": [
                "border-image-outset",
                "border-image-repeat",
                "border-image-slice",
                "border-image-source",
                "border-image-width"
            ],
            "computed": [
                "border-image-outset",
                "border-image-repeat",
                "border-image-slice",
                "border-image-source",
                "border-image-width"
            ],
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-image-outset": {
            "syntax": "[ &lt;length&gt; | &lt;number&gt; ]{1,4}",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>0s<\/code>",
            "appliesto": "allElementsExceptTableElementsWhenCollapse",
            "computed": {
                "en-US": "all lengths made absolute, otherwise as specified",
                "fr": "comme sp\u00e9cifi\u00e9, mais avec les longueurs relatives transform\u00e9es en longueurs absolues"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-image-repeat": {
            "syntax": "[ stretch | repeat | round ]{1,2}",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>stretch<\/code>",
            "appliesto": "allElementsExceptTableElementsWhenCollapse",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-image-slice": {
            "syntax": "[&lt;number&gt; | &lt;percentage&gt;]{1,4} &amp;&amp; fill?",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": {
                "en-US": "refer to the size of the border image",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe des Bildes",
                "fr": "se rapporte \u00e0 la taille de l'image de bordure",
                "ja": "ボーダー画像のサイズ"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>100%<\/code>",
            "appliesto": "allElementsExceptTableElementsWhenCollapse",
            "computed": {
                "en-US": "one to four percentage(s) (as specified) or absolute length(s), plus the keyword <code>fill<\/code> if specified",
                "de": "ein bis vier Prozentwert(e) (wie angegeben) oder absolute Länge(n) plus das Schlüsselwort <code>fill<\/code>, falls angegeben",
                "fr": "un \u00e0 quatre pourcentages, comme sp\u00e9cifi\u00e9s, ou des longueurs absolues, suivis par le mot-cl\u00e9 <code>fill<\/code> si sp\u00e9cifi\u00e9",
                "ja": "1 \u3064\u304b\u3089 4 \u3064\u306e\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8\u5024\uff08\u6307\u5b9a\u5024\uff09\u307e\u305f\u306f\u7d76\u5bfe\u7684\u306a\u9577\u3055\u3002\u6307\u5b9a\u3055\u308c\u3066\u3044\u308c\u3070\u7d9a\u3051\u3066\u30ad\u30fc\u30ef\u30fc\u30c9 <code>fill<\/code>"
            },
            "order": {
                "en-US": "the percentages or lengths, eventually followed by the keyword <code>fill<\/code>",
                "de": "die Prozentwerte oder Längen gefolgt vom Schlüsselwort <code>fill<\/code>"
            },
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-image-source": {
            "syntax": "none | &lt;image&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsExceptTableElementsWhenCollapse",
            "computed": {
                "en-US": "none or the image with its URI made absolute",
                "de": "none oder the image with its URI made absolute",
                "fr": "<code>none<\/code> ou une image dont l'URI a \u00e9t\u00e9 rendue absolue",
                "ja": "none \u307e\u305f\u306f\u753b\u50cf\u306e\u7d76\u5bfe\u7684 URI"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-image-width": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; | &lt;number&gt; | auto ]{1,4}",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": {
                "en-US": "refer to the width or height of the border image area",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe des Rahmens",
                "fr": "se rapporte \u00e0 la largeur ou la hauteur de la zone de l'image de bordure"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>1<\/code>",
            "appliesto": {
                "en-US": "all elements, except table elements when {{cssxref(\"border-collapse\")}} is <code>collapse<\/code>",
                "de": "Alle Elemente, ausser table Elemente when {{cssxref(\"border-collapse\")}} ist <code>collapse<\/code>",
                "fr": "tous les \u00e9l\u00e9ments sauf les \u00e9l\u00e9ments de table lorsque {{cssxref(\"border-collapse\")}} vaut <code>collapse<\/code>"
            },
            "computed": {
                "en-US": "all lengths made absolute, otherwise as specified",
                "fr": "comme sp\u00e9cifi\u00e9, mais avec les longueurs relatives transform\u00e9es en longueurs absolues"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-left": {
            "syntax": "&lt;br-width&gt; || &lt;br-style&gt; || &lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-left-color",
                "border-left-style",
                "border-left-width"
            ],
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-left-width",
                "border-left-style",
                "border-left-color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-left-width",
                "border-left-style",
                "border-left-color"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-left-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>currentColor<\/code>",
            "appliesto": "allElements",
            "computed": "'color'",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-left-style": {
            "syntax": "&lt;br-style&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-left-width": {
            "syntax": "&lt;br-width&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "the absolute length or <code>0<\/code> if {{cssxref(\"border-left-style\")}} is <code>none<\/code> or <code>hidden<\/code>",
                "de": "the absolute length oder <code>0<\/code> if {{cssxref(\"border-left-style\")}} ist <code>none<\/code> oder <code>hidden<\/code>",
                "fr": "la longueur absolue ou <code>0<\/code> si {{cssxref(\"border-left-style\")}} vaut <code>none<\/code> ou <code>hidden<\/code>",
                "ja": "正数値の <length>。'none' と 'hidden' は '0' として扱われます。"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-radius": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; ]{1,4} [ \/ [ &lt;length&gt; | &lt;percentage&gt; ]{1,4} ]?",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-right-radius",
                "border-bottom-left-radius"
            ],
            "percentages": {
                "en-US": "refer to the corresponding dimension of the border box",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe der Border-Box",
                "fr": "se rapporte \u00e0 la dimension correspondance de la bo\u00eete de bordure"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-right-radius",
                "border-bottom-left-radius"
            ],
            "appliesto": "allElementsUAsNotRequiredWhenCollapse",
            "computed": [
                "border-bottom-left-radius",
                "border-bottom-right-radius",
                "border-top-left-radius",
                "border-top-right-radius"
            ],
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-right": {
            "syntax": "&lt;br-width&gt; || &lt;br-style&gt; || &lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-right-color",
                "border-right-style",
                "border-right-width"
            ],
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-right-width",
                "border-right-style",
                "border-right-color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-right-width",
                "border-right-style",
                "border-right-color"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-right-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>currentColor<\/code>",
            "appliesto": "allElements",
            "computed": "'color'",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-right-style": {
            "syntax": "&lt;br-style&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-right-width": {
            "syntax": "&lt;br-width&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "the absolute length or <code>0<\/code> if {{cssxref(\"border-right-style\")}} is <code>none<\/code> or <code>hidden<\/code>",
                "de": "the absolute length oder <code>0<\/code> if {{cssxref(\"border-right-style\")}} ist <code>none<\/code> oder <code>hidden<\/code>",
                "fr": "la longueur absolue ou <code>0<\/code> si {{cssxref(\"border-left-style\")}} vaut <code>none<\/code> ou <code>hidden<\/code>"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-style": {
            "syntax": "&lt;br-style&gt;{1,4}",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-top-style",
                "border-right-style",
                "border-bottom-style",
                "border-left-style"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-bottom-style",
                "border-left-style",
                "border-right-style",
                "border-top-style"
            ],
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-top": {
            "syntax": "&lt;br-width&gt; || &lt;br-style&gt; || &lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-top-color",
                "border-top-style",
                "border-top-width"
            ],
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-top-width",
                "border-top-style",
                "border-top-color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-top-width",
                "border-top-style",
                "border-top-color"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-top-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>currentColor<\/code>",
            "appliesto": "allElements",
            "computed": "'color'",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-top-left-radius": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the corresponding dimension of the border box",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe der Border-Box",
                "fr": "se rapporte \u00e0 la dimension correspondance de la bo\u00eete de bordure"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsUAsNotRequiredWhenCollapse",
            "computed": "twoAbsoluteLengthOrPercentages",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-top-right-radius": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the corresponding dimension of the border box",
                "de": "bezieht sich auf die Gr\u00f6\u00dfe der Border-Box",
                "fr": "se rapporte \u00e0 la dimension correspondance de la bo\u00eete de bordure"
            },
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsUAsNotRequiredWhenCollapse",
            "computed": "twoAbsoluteLengthOrPercentages",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-top-style": {
            "syntax": "&lt;br-style&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-top-width": {
            "syntax": "&lt;br-width&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "the absolute length or <code>0<\/code> if {{cssxref(\"border-top-style\")}} is <code>none<\/code> or <code>hidden<\/code>",
                "de": "the absolute length oder <code>0<\/code> if {{cssxref(\"border-top-style\")}} ist <code>none<\/code> oder <code>hidden<\/code>",
                "fr": "la longueur absolue ou <code>0<\/code> si {{cssxref(\"border-left-style\")}} vaut <code>none<\/code> ou <code>hidden<\/code>",
                "ja": " 正数値の{{cssxref(\"length\")}}。{{cssxref(\"border-left-style\")}} が<code>none<\/code> または <code>hidden<\/code> なら '0'"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "border-width": {
            "syntax": "&lt;br-width&gt;{1,4}",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "border-bottom-width",
                "border-left-width",
                "border-right-width",
                "border-top-width"
            ],
            "percentages": "no",
            "groups": [
                "CSS Background and Borders"
            ],
            "initial": [
                "border-top-width",
                "border-right-width",
                "border-bottom-width",
                "border-left-width"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-bottom-width",
                "border-left-width",
                "border-right-width",
                "border-top-width"
            ],
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "box-decoration-break": {
            "syntax": "slice | clone",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>slice<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "box-shadow": {
            "syntax": "none | &lt;shadow&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "shadowList"
            },
            "percentages": "no",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "any length made absolute; any specified color computed; otherwise as specified",
                "fr": "toute longueur sous forme absolue; toute couleur sous forme calcul\u00e9e; sinon comme sp\u00e9cifi\u00e9",
                "ja": "指定値（length は全て絶対値となり、color については計算値となる）"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "margin": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; | auto ]{1,4}",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": [
                "margin-bottom",
                "margin-left",
                "margin-right",
                "margin-top"
            ],
            "appliesto": "allElementsExceptTableDisplayTypes",
            "computed": [
                "margin-bottom",
                "margin-left",
                "margin-right",
                "margin-top"
            ],
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "margin-bottom": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "margin-left": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "margin-right": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "margin-top": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "padding": {
            "syntax": "[ &lt;length&gt; | &lt;percentage&gt; ]{1,4}",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": [
                "padding-bottom",
                "padding-left",
                "padding-right",
                "padding-top"
            ],
            "appliesto": "allElementsExceptInternalTableDisplayTypes",
            "computed": [
                "padding-bottom",
                "padding-left",
                "padding-right",
                "padding-top"
            ],
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "padding-bottom": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptInternalTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "padding-left": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptInternalTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "padding-right": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptInternalTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "padding-top": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsExceptInternalTableDisplayTypes",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter"
            ]
        },
        "box-sizing": {
            "syntax": "content-box | border-box",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>content-box<\/code>",
            "appliesto": {
                "en-US": "all elements that accept width or height",
                "de": "alle Elemente, die Breite oder Höhe akzeptieren",
                "ja": "width \u304a\u3088\u3073 height \u3092\u53d7\u3051\u4ed8\u3051\u308b\u5168\u3066\u306e\u8981\u7d20"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "max-height": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | none | max-content | min-content | fit-content | fill-available",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the percentage value is treated as <code>none<\/code>.",
                "de": "Der Prozentwert wird unter Berücksichtigung der Höhe des die generierte Box beinhaltenden Blocks berechnet. Falls die Höhe des beinhaltenden Blocks nicht explizit angegeben wurde (d. h. sie hängt von der Höhe des Inhalts ab) und dieses Element nicht absolut positioniert ist, wird der Prozentwert wie <code>none<\/code> behandelt.",
                "fr": "Le pourcentage est par rapport \u00e0 la hauteur de la bo\u00eete g\u00e9n\u00e9r\u00e9e par le bloc contenant. Si la hauteur du bloc contenant n'est pas explicitement sp\u00e9cifi\u00e9e (c'est-\u00e0-dire qu'elle d\u00e9pend de la hauteur du contenu), et si cet \u00e9l\u00e9ment n'est pas absolument positionn\u00e9, la valeur du pourcentage est trait\u00e9e comme si elle valait <code>none<\/code>."
            },
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsButNonReplacedAndTableColumns",
            "computed": {
                "en-US": "the percentage as specified or the absolute length or <code>none<\/code>",
                "de": "der Prozentwert wie angegeben oder die absolute Länge oder <code>none<\/code>",
                "fr": "le pourcentage comme sp\u00e9cifi\u00e9 ou la longueur absolue ou le mot-cl\u00e9 <code>none<\/code>",
                "ja": "\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8\u5024\u307e\u305f\u306f\u7d76\u5bfe\u7684\u306a\u9577\u3055\u3001\u307e\u305f\u306f <code>none<\/code>"
            },
            "order": "uniqueOrder"
        },
        "min-height": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto | max-content | min-content | fit-content | fill-available",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the percentage value is treated as <code>0<\/code>.",
                "de": "Der Prozentwert wird unter Berücksichtigung der Höhe des die generierte Box beinhaltenden Blocks berechnet. Falls die Höhe des beinhaltenden Blocks nicht explizit angegeben wurde (d. h. sie hängt von der Höhe des Inhalts ab) und dieses Element nicht absolut positioniert ist, wird der Prozentwert wie <code>0<\/code> behandelt.",
                "fr": "Le poucentage est par rapport \u00e0 la hauteur de la bo\u00eete g\u00e9n\u00e9r\u00e9e par le bloc contenant. Si la hauteur du bloc contenant n'est pas explicitement sp\u00e9cifi\u00e9e (c'est-\u00e0-dire qu'elle d\u00e9pend de la hauteur du contenu), et si cet \u00e9l\u00e9ment n'est pas absolument positionn\u00e9 , la valeur du pourcentage est trait\u00e9e comme si elle valait <code>0<\/code>.",
                "ja": "パーセンテージは、生成ボックスの包含ブロックの高さを基準に計算されます。 包含ブロックの高さが明示的に定義されず（この場合コンテンツの高さに依存します）この要素が絶対位置指定されていないなら、パーセンテージ値は 0 として扱われます。"
            },
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsButNonReplacedAndTableColumns",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder"
        },
        "height": {
            "syntax": "[&lt;length&gt; | &lt;percentage&gt;] &amp;&amp; [border-box | content-box]? | available | min-content | max-content | fit-content | complex | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the value computes to <code>auto<\/code>. A percentage height on the root element is relative to the initial containing block.",
                "de": "Der Prozentwert wird unter Berücksichtigung der Höhe des die generierte Box beinhaltenden Blocks berechnet. Falls die Höhe des beinhaltenden Blocks nicht explizit angegeben wurde (d. h. sie hängt von der Höhe des Inhalts ab) und dieses Element nicht absolut positioniert ist, ist der berechnete Wert <code>auto<\/code>. Eine prozentuale Höhe beim Wurzelelement ist relativ zum ursprünglichen beinhaltenden Block.",
                "fr": "Le poucentage est par rapport \u00e0 la hauteur de la bo\u00eete g\u00e9n\u00e9r\u00e9e par le bloc contenant. Si la hauteur du bloc contenant n'est pas explicitement sp\u00e9cifi\u00e9e (c'est-\u00e0-dire qu'elle d\u00e9pend de la hauteur du contenu), et si cet \u00e9l\u00e9ment n'est pas absolument positionn\u00e9, la valeur du pourcentage est trait\u00e9e comme <code>auto<\/code> et la hauteur du pourcentage sur l'\u00e9l\u00e9ment racine est relative au bloc contenant initial.",
                "ja": "パーセンテージは包含ブロックの高さ基準。包含ブロックの高さが明示されず（＝コンテンツの高さ依存の場合）、この要素が絶対位置指定されていないなら、値は <code>auto<\/code> になります。ルート要素で高さをパーセンテージ指定すると、初期包含ブロックに相対的になります。"
            },
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElementsButNonReplacedAndTableColumns",
            "computed": {
                "en-US": "a percentage or <code>auto<\/code> or the absolute length",
                "de": "ein Prozentwert oder <code>auto<\/code> oder die absolute Länge",
                "fr": "un pourcentage ou <code>auto<\/code> ou une longueur absolue",
                "ja": "パーセンテージ、auto、絶対的な長さのいずれか"
            },
            "order": "uniqueOrder"
        },
        "max-width": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | none | max-content | min-content | fit-content | fill-available",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsButNonReplacedAndTableRows",
            "computed": {
                "en-US": "the percentage as specified or the absolute length or <code>none<\/code>",
                "de": "der Prozentwert wie angegeben oder die absolute Länge oder <code>none<\/code>",
                "fr": "le pourcentage comme sp\u00e9cifi\u00e9 ou la longueur absolue ou le mot-cl\u00e9 <code>none<\/code>",
                "ja": "\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8\u5024\u307e\u305f\u306f\u7d76\u5bfe\u7684\u306a\u9577\u3055\u3001\u307e\u305f\u306f <code>none<\/code>"
            },
            "order": "uniqueOrder"
        },
        "min-width": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto | max-content | min-content | fit-content | fill-available",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElementsButNonReplacedAndTableRows",
            "computed": "percentageAsSpecifiedOrAbsoluteLength",
            "order": "uniqueOrder"
        },
        "width": {
            "syntax": "[&lt;length&gt; | &lt;percentage&gt;] &amp;&amp; [border-box | content-box]? | available | min-content | max-content | fit-content | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElementsButNonReplacedAndTableRows",
            "computed": {
                "en-US": "the percentage or <code>auto<\/code> as specified or the absolute length",
                "de": "der Prozentwert oder <code>auto<\/code> wie angegeben oder die absolute Länge",
                "fr": "le pourcentage ou <code>auto<\/code> comme sp\u00e9cifi\u00e9 ou la longueur absolue",
                "ja": "\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30fc\u30bb\u30f3\u30c6\u30fc\u30b8\u5024\u307e\u305f\u306f <code>auto<\/code>\u3001\u307e\u305f\u306f\u7d76\u5bfe\u7684\u306a\u9577\u3055"
            },
            "order": {
                "en-US": "the length or percentage before the keyword, if both are present",
                "de": "the length oder percentage before the keyword, if both are present"
            }
        },
        "overflow": {
            "syntax": "visible | hidden | scroll | auto",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>visible<\/code>",
            "appliesto": "nonReplacedBlockAndInlineBlockElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "overflow-x": {
            "syntax": "visible | hidden | scroll | auto",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>visible<\/code>",
            "appliesto": "nonReplacedBlockAndInlineBlockElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "overflow-y": {
            "syntax": "visible | hidden | scroll | auto",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>visible<\/code>",
            "appliesto": "nonReplacedBlockAndInlineBlockElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "visibility": {
            "syntax": "visible | hidden | collapse",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "visibility"
            },
            "percentages": "no",
            "groups": [
                "CSS Box Model"
            ],
            "initial": "<code>visible<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "border-collapse": {
            "syntax": "collapse | separate",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Table"
            ],
            "initial": "<code>separate<\/code>",
            "appliesto": "tableElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "border-spacing": {
            "syntax": "&lt;length&gt; &lt;length&gt;?",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Table"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "tableElements",
            "computed": {
                "en-US": "two absolute lengths",
                "fr": "deux longueurs absolues"
            },
            "order": "uniqueOrder"
        },
        "caption-side": {
            "syntax": "top | bottom | block-start | block-end | inline-start | inline-end",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Table"
            ],
            "initial": "<code>top<\/code>",
            "appliesto": {
                "en-US": "table-caption elements",
                "de": "table-caption Elemente",
                "ja": "table-caption \u8981\u7d20"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "empty-cells": {
            "syntax": "show | hide",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Table"
            ],
            "initial": "<code>show<\/code>",
            "appliesto": {
                "en-US": "table-cell elements",
                "de": "table-cell Elemente",
                "ja": "\u30c6\u30fc\u30d6\u30eb\u30bb\u30eb\u8981\u7d20"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "table-layout": {
            "syntax": "auto | fixed",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Table"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "tableElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "vertical-align": {
            "syntax": "baseline | sub | super | text-top | text-bottom | middle | top | bottom | &lt;percentage&gt; | &lt;length&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": {
                "en-US": "refer to the line-height of the element itself",
                "de": "bezieht sich auf die Zeilenh\u00f6he des Elements selbst",
                "fr": "se rapporte \u00e0 la hauteur de ligne de l'\u00e9l\u00e9ment lui-m\u00eame",
                "ja": "要素自身の行の高さ"
            },
            "groups": [
                "CSS Table"
            ],
            "initial": "<code>baseline<\/code>",
            "appliesto": {
                "en-US": "inline-level and table-cell elements",
                "de": "Inline- und table-cell Elemente",
                "ja": "インラインレベルとテーブルセル要素"
            },
            "computed": {
                "en-US": "for percentage and length values, the absolute length, otherwise the keyword as specified",
                "de": "for percentage undlength values, the absolute length, otherwise the keyword as specified",
                "fr": "pour les pourcentages et les valeurs de type {{xref_csslength}}, une valeur absolue, sinon le mot-cl\u00e9 tel que sp\u00e9cifi\u00e9",
                "ja": "パーセンテージか長さを指定すると絶対的な値、それ以外は指定されたキーワード"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "bottom": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the height of the containing block",
                "de": "bezieht sich auf die H\u00f6he des \u00e4u\u00dferen Elements",
                "fr": "se rapporte \u00e0 la hauteur du bloc contenant",
                "ja": "包含ブロックの高さ"
            },
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "left": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "right": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "top": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": {
                "en-US": "refer to the height of the containing block",
                "de": "bezieht sich auf die Breite des \u00e4u\u00dferen Elements",
                "fr": "se rapporte \u00e0 la hauteur du bloc contenant",
                "ja": "包含ブロックの高さ"
            },
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "float": {
            "syntax": "left | right | none",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": {
                "en-US": "all elements, but has no effect if the value of display is none.",
                "de": "Alle Elemente, ausser bei <code>display: none<\/code>",
                "ja": "全要素。ただし display が noneなら効果を持ちません。"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "clear": {
            "syntax": "none | left | right | both",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "blockLevelElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "position": {
            "syntax": "static | relative | absolute | sticky | fixed",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>static<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "stacking": true
        },
        "z-index": {
            "syntax": "auto | &lt;integer&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "integer"
            },
            "percentages": "no",
            "groups": [
                "CSS Positioning"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "stacking": true
        },
        "font": {
            "syntax": "[ [ &lt;\u2018font-style\u2019&gt; || &lt;font-variant-css21&gt; || &lt;\u2018font-weight\u2019&gt; || &lt;\u2018font-stretch\u2019&gt; ]? &lt;\u2018font-size\u2019&gt; [ \/ &lt;\u2018line-height\u2019&gt; ]? &lt;\u2018font-family\u2019&gt; ] | caption | icon | menu | message-box | small-caption | status-bar",
            "media": "visual",
            "inherited": true,
            "animatable": [
                "font-style",
                "font-variant",
                "font-weight",
                "font-stretch",
                "font-size",
                "line-height",
                "font-family"
            ],
            "percentages": [
                "font-size",
                "line-height"
            ],
            "groups": [
                "CSS Fonts"
            ],
            "initial": [
                "font-style",
                "font-variant",
                "font-weight",
                "font-stretch",
                "font-size",
                "line-height",
                "font-family"
            ],
            "appliesto": "allElements",
            "computed": [
                "font-style",
                "font-variant",
                "font-weight",
                "font-stretch",
                "font-size",
                "line-height",
                "font-family"
            ],
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-family": {
            "syntax": "[ &lt;family-name&gt; | &lt;generic-family&gt; ]#",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": {
                "en-US": "depends on user agent",
                "de": "hängt vom User Agent ab",
                "fr": "d\u00e9pend de l'agent utilisateur"
            },
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-variant": {
            "syntax": "normal | none | [ &lt;common-lig-values&gt; || &lt;discretionary-lig-values&gt; || &lt;historical-lig-values&gt; || &lt;contextual-alt-values&gt; || stylistic(&lt;feature-value-name&gt;) || historical-forms || styleset(&lt;feature-value-name&gt; #) || character-variant(&lt;feature-value-name&gt; #) || swash(&lt;feature-value-name&gt;) || ornaments(&lt;feature-value-name&gt;) || annotation(&lt;feature-value-name&gt;) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || &lt;numeric-figure-values&gt; || &lt;numeric-spacing-values&gt; || &lt;numeric-fraction-values&gt; || ordinal || slashed-zero || &lt;east-asian-variant-values&gt; || &lt;east-asian-width-values&gt; || ruby ] ",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-weight": {
            "syntax": "normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "fontWeight"
            },
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "the keyword or the numerical value as specified, with <code>bolder<\/code> and <code>lighter<\/code> transformed to the real value",
                "de": "the keyword oder the numerical value as specified, with <code>bolder<\/code> und<code>lighter<\/code> transformed to the real value"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-stretch": {
            "syntax": "normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "fontStretch"
            },
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-size": {
            "syntax": "&lt;absolute-size&gt; | &lt;relative-size&gt; | &lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "length"
            },
            "percentages": {
                "en-US": "refer to the parent element's font size",
                "de": "bezieht sich auf die Schriftgr\u00f6\u00dfe des Elternelements",
                "fr": "se rapporte \u00e0 la taille de la police de l'\u00e9l\u00e9ment parent"
            },
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "line-height": {
            "syntax": "normal | &lt;number&gt; | &lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "number length"
            },
            "percentages": {
                "en-US": "refer to the font size of the element itself",
                "de": "bezieht sich auf die Schriftgr\u00f6\u00dfe des Elternelements",
                "fr": "se rapporte \u00e0 la taille de la police de l'\u00e9l\u00e9ment lui-m\u00eame",
                "ja": "要素自身のフォントサイズ"
            },
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "for percentage and length values, the absolute length, otherwise as specified",
                "de": "for percentage undlength values, the absolute length, otherwise as specified",
                "ja": "パーセンテージか length を指定すると絶対的な値、それ以外は指定通り"
            },
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-feature-settings": {
            "syntax": "normal | &lt;feature-tag-value&gt;#",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-language-override": {
            "syntax": "normal | &lt;string&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-size-adjust": {
            "syntax": "none | &lt;number&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "number"
            },
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-style": {
            "syntax": "normal | italic | oblique",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-synthesis": {
            "syntax": "none | [ weight || style ]",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>weight style<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-kerning": {
            "syntax": "auto | normal | none",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-variant-ligatures": {
            "syntax": "normal | none | [ &lt;common-lig-values&gt; || &lt;discretionary-lig-values&gt; || &lt;historical-lig-values&gt; || &lt;contextual-alt-values&gt; ]",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-variant-position": {
            "syntax": "normal | sub | super",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-variant-caps": {
            "syntax": "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-variant-numeric": {
            "syntax": "normal | [ &lt;numeric-figure-values&gt; || &lt;numeric-spacing-values&gt; || &lt;numeric-fraction-values&gt; || ordinal || slashed-zero ]",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-variant-east-asian": {
            "syntax": "normal | [ &lt;east-asian-variant-values&gt; || &lt;east-asian-width-values&gt; || ruby ] ",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "font-variant-alternates": {
            "syntax": "normal | [ stylistic(&lt;feature-value-name&gt;) || historical-forms || styleset(&lt;feature-value-name&gt; #) || character-variant(&lt;feature-value-name&gt; #) || swash(&lt;feature-value-name&gt;) || ornaments(&lt;feature-value-name&gt;) || annotation(&lt;feature-value-name&gt;) ] ",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Fonts"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "object-fit": {
            "syntax": "fill | contain | cover | none | scale-down",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Images"
            ],
            "initial": "<code>fill<\/code>",
            "appliesto": {
                "en-US": "replaced elements",
                "de": "ersetzte Elemente"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "object-position": {
            "syntax": "&lt;position&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "repeatableList simpleList lpc"
            },
            "percentages": {
                "en-US": "refer to width and height of element itself"
            },
            "groups": [
                "CSS Images"
            ],
            "initial": "<code>50% 50%<\/code>",
            "appliesto": {
                "en-US": "replaced elements"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "image-rendering": {
            "syntax": "auto | crisp-edges | pixelated",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Images"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "image-orientation": {
            "syntax": "from-image | &lt;angle&gt; | [&lt;angle&gt;? flip]",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Images"
            ],
            "initial": "<code>0deg<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "an {{xref_cssangle}}, rounded to the next quarter turn from <code>0deg<\/code> and normalized, that is moduloing the value by <code>1turn<\/code>",
                "de": "ein {{xref_cssangle}}, auf den n\u00e4chsten Viertel von <code>0deg<\/code> gerundet (\u00fcblicherweise\u00a0 <code>1turn)<\/code>"
            },
            "order": "uniqueOrder"
        },
        "counter-increment": {
            "syntax": "[&lt;user-ident&gt; &lt;integer&gt;?]+ | none",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Lists and Counters"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "counter-reset": {
            "syntax": "[&lt;user-ident&gt; &lt;integer&gt;?]+ | none",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Lists and Counters"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "list-style": {
            "syntax": "&lt;'list-style-type'&gt; || &lt;'list-style-position'&gt; || &lt;'list-style-image'&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Lists and Counters"
            ],
            "initial": [
                "list-style-type",
                "list-style-position",
                "list-style-image"
            ],
            "appliesto": "listItems",
            "computed": [
                "list-style-image",
                "list-style-position",
                "list-style-type"
            ],
            "order": "orderOfAppearance"
        },
        "list-style-image": {
            "syntax": "&lt;uri&gt; | none",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Lists and Counters"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "listItems",
            "computed": {
                "en-US": "<code>none<\/code> or the image with its URI made absolute",
                "de": "<code>none<\/code> oder ein Bild mit absoluter URL",
                "ja": "<code>none<\/code> または画像の絶対 URI"
            },
            "order": "uniqueOrder"
        },
        "list-style-position": {
            "syntax": "inside | outside",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Lists and Counters"
            ],
            "initial": "<code>outside<\/code>",
            "appliesto": "listItems",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "list-style-type": {
            "syntax": "&lt;counter-style&gt; | &lt;string&gt; | none",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Lists and Counters"
            ],
            "initial": "<code>disc<\/code>",
            "appliesto": "listItems",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "orphans": {
            "syntax": "&lt;integer&gt;",
            "media": "visual, paged",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Pages"
            ],
            "initial": "<code><code>2<\/code><\/code>",
            "appliesto": "blockContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "page-break-after": {
            "syntax": "auto | always | avoid | left | right",
            "media": "visual, paged",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Pages"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "blockElementsInNormalFlow",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "page-break-before": {
            "syntax": "auto | always | avoid | left | right",
            "media": "visual, paged",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Pages"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "blockElementsInNormalFlow",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "page-break-inside": {
            "syntax": "auto | avoid",
            "media": "visual, paged",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Pages"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "blockElementsInNormalFlow",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "widows": {
            "syntax": "&lt;integer&gt;",
            "media": "visual, paged",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Pages"
            ],
            "initial": "<code><code>2<\/code><\/code>",
            "appliesto": "blockContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "outline": {
            "syntax": "[ &lt;'outline-color'&gt; || &lt;'outline-style'&gt; || &lt;'outline-width'&gt; ]",
            "media": "visual, interactive",
            "inherited": false,
            "animatable": [
                "outline-color",
                "outline-width",
                "outline-style"
            ],
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": [
                "outline-color",
                "outline-style",
                "outline-width"
            ],
            "appliesto": "allElements",
            "computed": [
                "outline-color",
                "outline-width",
                "outline-style"
            ],
            "order": "orderOfAppearance"
        },
        "outline-color": {
            "syntax": "&lt;color&gt; | invert",
            "media": "visual, interactive",
            "inherited": false,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": {
                "en-US": "<code>invert<\/code>, for browsers supporting it, <code>currentColor<\/code> for the other",
                "de": "<code>invert<\/code> für Browser, die es unterstützen, <code>currentColor<\/code> für die anderen",
                "fr": "<code>invert<\/code>, pour les navigateurs le supportant, <code>currentColor<\/code> pour les autres",
                "ja": "ブラウザが invert をサポートしていればinvert、それ以外では <code>currentColor<\/code>"
            },
            "appliesto": "allElements",
            "computed": {
                "en-US": "For the keyword <code>invert<\/code>, the computed value is <code>invert<\/code>. For the color value, if the value is translucent, the computed value will be the <code>rgba()<\/code> corresponding one. If it isn't, it will be the <code>rgb()<\/code> corresponding one. The <code>transparent<\/code> keyword maps to <code>rgb(0,0,0)<\/code>.",
                "de": "Für das Schlüsselwort <code>invert<\/code> ist der berechnete Wert <code>invert<\/code>. Für den Farbwert, falls der Wert durchscheinend ist, ist der berechnete Wert der entsprechende <code>rgba()<\/code> Wert. Falls nicht, ist er der entsprechende <code>rgb()<\/code> Wert. Das Schlüsselwort <code>transparent<\/code> wird zu <code>rgb(0,0,0)<\/code>.",
                "ja": "キーワード <code>invert<\/code> が指定されると計算値も <code>invert<\/code>。色が指定されると、半透明なら、計算値はそれに一致する<code>rbga()<\/code> で、不透明なら、それに一致する <code>rgb()<\/code>。キーワード <code>transparent<\/code> は <code>rgb(0,0,0)<\/code> にマップされます"
            },
            "order": "uniqueOrder"
        },
        "outline-width": {
            "syntax": "&lt;br-width&gt;",
            "media": "visual, interactive",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "an absolute length; if the keyword <code>none<\/code> is specified, the computed value is <code>0<\/code>",
                "de": "an absolute length; if the keyword <code>none<\/code> ist specified, the computed value ist <code>0<\/code>",
                "ja": "絶対的 length。キーワード <code>none<\/code> が指定されると計算値は <code>0<\/code> になります"
            },
            "order": "uniqueOrder"
        },
        "outline-style": {
            "syntax": "auto | &lt;br-style&gt;",
            "media": "visual, interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "outline-offset": {
            "syntax": "&lt;length&gt;",
            "media": "visual, interactive",
            "inherited": false,
            "animatable": {
                "as": "length"
            },
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder"
        },
        "cursor": {
            "syntax": "[ [ &lt;uri&gt; [&lt;x&gt; &lt;y&gt;]?,]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]",
            "media": "visual, interactive",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "as specified, but with relative URI converted into absolute URI",
                "de": "Wie angegeben, aber relative URL's werden in absolute URL's konvertiert",
                "pl": "jako określone (ze względnymi adresami URL konwertowanymi do bezwzględnych adresów URL)"
            },
            "order": "uniqueOrder"
        },
        "resize": {
            "syntax": "none | both | horizontal | vertical",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": {
                "en-US": "elements with overflow other than visible",
                "de": "ausser Elemente mit <code>overflow: visible<\/code>"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-overflow": {
            "syntax": "[ clip | ellipsis | &lt;string&gt; ]{1,2}",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS User Interface"
            ],
            "initial": "<code>clip<\/code>",
            "appliesto": "blockContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::placeholder"
            ]
        },
        "content": {
            "syntax": "normal | none | [ &lt;string&gt; | &lt;uri&gt; | &lt;counter&gt; | attr() | open-quote | close-quote | no-open-quote | no-close-quote ]+",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Generated Content"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": {
                "en-US": "{{cssxref(\"::before\")}} and {{cssxref(\"::after\")}} <a href=\"\/en-US\/docs\/CSS\/Pseudo-elements\" title=\"\/en-US\/docs\/CSS\/Pseudo-elements\">pseudo-elements<\/a>",
                "de": "{{cssxref(\"::before\")}} und{{cssxref(\"::after\")}} <a href=\"\/en-US\/docs\/CSS\/Pseudo-elements\" title=\"\/en-US\/docs\/CSS\/Pseudo-elements\">pseudo-Elemente<\/a>",
                "fr": "{{cssxref(\"::before\")}} and {{cssxref(\"::after\")}} <a href=\"\/en-US\/docs\/CSS\/Pseudo-elements\" title=\"\/fr\/docs\/CSS\/Pseudo-elements\">pseudo-elements<\/a>",
                "ja": "{{cssxref(\"::before\")}} \/ {{cssxref(\"::after\")}} <a href=\"\/ja\/docs\/Web\/CSS\/Pseudo-elements\">\u7591\u4f3c\u8981\u7d20<\/a>"
            },
            "computed": {
                "en-US": "On elements, always computes to <code>normal<\/code>. On {{cssxref(\"::before\")}} and {{cssxref(\"::after\")}}, if <code>normal<\/code> is specified, computes to <code>none<\/code>. Otherwise, for URI values, the absolute URI; for <code>attr()<\/code> values, the resulting string; for other keywords, as specified.",
                "de": "Bei Elementen ist der berechnete Wert immer <code>normal<\/code>. Falls bei {{cssxref(\"::before\")}} und {{cssxref(\"::after\")}} <code>normal<\/code> angegeben ist, ist der berechnete Wert <code>none<\/code>. Ansonsten, für URI Werte die absolute URI; für <code>attr()<\/code> Werte der resultierende String; für andere Schlüsselwörter wie angegeben.",
                "ja": "通常要素で使われると常に <code>normal<\/code>。{{cssxref(\"::before\")}} 及び {{cssxref(\"::after\")}} では: <code>normal<\/code> の指定があれば計算値は <code>none<\/code>。指定がなければ、<ul><li>URI 値は、絶対的 URI となる</li><li><code>attr()<\/code> 値は、計算値の文字列となる</li><li>その他のキーワードについては指定どおり</li></ul>"
            },
            "order": "uniqueOrder"
        },
        "quotes": {
            "syntax": "[&lt;string&gt; &lt;string&gt;]+ | none",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Generated Content"
            ],
            "initial": {
                "en-US": "user agent specific",
                "fr": "Sp\u00e9cifique \u00e0 l'agent utilisateur",
                "ja": "\u30e6\u30fc\u30b6\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u56fa\u6709"
            },
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "mask": {
            "syntax": "&lt;mask-layer&gt;#",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "mask-position",
                "mask-size"
            ],
            "percentages": [
                "mask-position"
            ],
            "groups": [
                "CSS Masks"
            ],
            "initial": [
                "mask-origin",
                "mask-clip",
                "mask-border"
            ],
            "appliesto": "allElementsSVGContainerElements",
            "computed": [
                "mask-origin",
                "mask-clip",
                "mask-border"
            ],
            "order": "uniqueOrder",
            "stacking": true
        },
        "mask-type": {
            "syntax": "luminance | alpha",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Masks"
            ],
            "initial": "<code>luminance<\/code>",
            "appliesto": {
                "en-US": "{{SVGElement(\"mask\")}} elements"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "filter": {
            "syntax": "none | &lt;filter-function-list&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "yes",
            "percentages": "no",
            "groups": [
                "Filter Effects"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsSVGContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "backdrop-filter": {
            "syntax": "none | &lt;filter-function-list&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "yes",
            "percentages": "no",
            "groups": [
                "Filter Effects"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsSVGContainerElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "clip": {
            "syntax": "&lt;shape&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "rectangle"
            },
            "percentages": "no",
            "groups": [
                "CSS Miscellaneous"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "absolutely positioned elements",
                "de": "absolut positionierte Elemente",
                "ja": "絶対位置指定された要素"
            },
            "computed": {
                "en-US": "<code>auto<\/code> if specified as <code>auto<\/code>, otherwise a rectangle with four values, each of which is <code>auto<\/code> if specified as <code>auto<\/code> or the computed length otherwise",
                "de": "<code>auto<\/code>, falls als <code>auto<\/code> angegeben, ansonsten ein Rechteck mit vier Werten, von denen jeder <code>auto<\/code> ist, falls als <code>auto<\/code> angegeben, ansonsten die berechnete Länge",
                "ja": "auto 指定されていれば auto、それ以外は 4 つの値をともなう矩形。矩形の場合、各値は auto 指定されていれば auto、それ以外では計算値"
            },
            "order": "uniqueOrder"
        },
        "clip-path": {
            "syntax": "&lt;clip-source&gt; | [ &lt;basic-shape&gt; || &lt;geometry-box&gt; ] | none",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "en-US": "yes, as specified for {{cssxref(\"basic-shape\")}}, otherwise no",
                "de": "ja, wie angegeben für {{cssxref(\"basic-shape\")}}, ansonsten nein"
            },
            "percentages": "asSpecified",
            "groups": [
                "CSS Miscellaneous"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElementsSVGContainerElements",
            "computed": {
                "en-US": "as specified, but with {{cssxref(\"url\")}} values made absolute",
                "de": "wie angegeben, aber mit absoluten {{cssxref(\"url\")}} Werten"
            },
            "order": "uniqueOrder"
        },
        "display": {
            "syntax": "none | inline | block | list-item | inline-block | inline-table | table | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group | flex | inline-flex | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Miscellaneous"
            ],
            "initial": "<code>inline<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "as the specified value, except for positioned and floating elements and the root element. In both cases the computed value may be a keyword other than the one specified.",
                "de": "wie der angegebene Wert, außer für positionierte und umfließende Elemente und das Wurzelelement. In beiden Fällen kann der berechnete Wert ein Schlüsselwort sein, das nicht dem angegebenen entspricht.",
                "ja": "指定通り。ただし位置指定された要素とフロート、ルート要素を除く。これらは計算値が指定したものと違うキーワードになる可能性があります"
            },
            "order": "uniqueOrder"
        },
        "ime-mode": {
            "syntax": "auto | normal | active | inactive | disabled",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Miscellaneous"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "text fields",
                "de": "Textfelder",
                "ja": "\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "all": {
            "syntax": "initial | inherit | unset",
            "media": {
                "en-US": "There is no practical media for it.",
                "de": "Es gibt kein praktisches Medium dafür.",
                "ja": "なし"
            },
            "inherited": false,
            "animatable": {
                "en-US": "as each of the properties of the shorthand (all properties but {{cssxref(\"unicode-bidi\")}} and {{cssxref(\"direction\")}})",
                "de": "wie jede der Kurzschreibweisen Eigenschaften (alle Eigenschaften außer {{cssxref(\"unicode-bidi\")}} und {{cssxref(\"direction\")}})"
            },
            "percentages": "no",
            "groups": [
                "CSS Miscellaneous"
            ],
            "initial": {
                "en-US": "There is no practical initial value for it.",
                "de": "Es gibt keinen praktischen Initialwert dafür.",
                "ja": "なし"
            },
            "appliesto": "allElements",
            "computed": {
                "en-US": "as the specified value applies to each property this is a shorthand for.",
                "de": "wie der angegebene Wert wird er auf alle Eigenschaften angewandt, für die dies eine Kurzschreibweise ist."
            },
            "order": "uniqueOrder"
        },
        "will-change": {
            "syntax": "auto | &lt;animateable-feature&gt;#",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Miscellaneous"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "text-rendering": {
            "syntax": "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Miscellaneous"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "text elements",
                "de": "Textelemente",
                "ja": "\u30c6\u30ad\u30b9\u30c8\u8981\u7d20"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "background-blend-mode": {
            "syntax": "&lt;blend-mode&gt;#",
            "media": "none",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Compositing and Blending"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": {
                "en-US": "All elements. In SVG, it applies to container elements, graphics elements, and graphics referencing elements.",
                "de": "Alle Elemente. In SVG wird er auf Containerelemente, Grafikelemente und Grafiken referenzierende Elemente angewandt.",
                "ja": "\u5168\u8981\u7d20. In SVG, it applies to container elements, graphics elements, and graphics referencing elements."
            },
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "alsoAppliesTo": [
                "::first-letter",
                "::first-line",
                "::placeholder"
            ]
        },
        "mix-blend-mode": {
            "syntax": "&lt;blend-mode&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Compositing and Blending"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": {
                "en-US": "all HTML elements",
                "de": "alle HTML-Elemente"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder",
            "stacking": true
        },
        "isolation": {
            "syntax": "auto | isolate",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Compositing and Blending"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "All elements. In SVG, it applies to container elements, graphics elements, and graphics referencing elements.",
                "de": "Alle Elemente. In SVG wird er auf Containerelemente, Grafikelemente und Grafiken referenzierende Elemente angewandt.",
                "ja": "\u5168\u8981\u7d20. In SVG, it applies to container elements, graphics elements, and graphics referencing elements."
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "shape-outside": {
            "syntax": "none | &lt;shape-box&gt; || &lt;basic-shape&gt; | &lt;image&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "basic-shape"
            },
            "percentages": "no",
            "groups": [
                "CSS Shapes"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "floats",
            "computed": {
                "en-US": "as defined for {{cssxref(\"basic-shape\")}} (with\u00a0{{cssxref(\"shape-box\")}} following, if supplied), the\u00a0{{cssxref(\"image\")}} with its URI made absolute, otherwise as specified.",
                "de": "wie definiert für {{cssxref(\"basic-shape\")}} (gefolgt von\u00a0{{cssxref(\"shape-box\")}}, falls angegeben), dem\u00a0{{cssxref(\"image\")}}, dessen URI absolut gemacht wurde, ansonsten wie angegeben."
            },
            "order": "uniqueOrder"
        },
        "shape-margin": {
            "syntax": "&lt;length&gt; | &lt;percentage&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "lpc"
            },
            "percentages": "referToWidthOfContainingBlock",
            "groups": [
                "CSS Shapes"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "floats",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder"
        },
        "shape-image-threshold": {
            "syntax": "&lt;number&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": {
                "as": "number"
            },
            "percentages": "no",
            "groups": [
                "CSS Shapes"
            ],
            "initial": "<code>0.0<\/code>",
            "appliesto": "floats",
            "computed": {
                "en-US": "The same as the specified value after clipping the {{cssxref(\"number\")}} to the range [0.0, 1.0].",
                "de": "Derselbe wie der angegebene Wert nachdem die {{cssxref(\"number\")}} auf den Bereich [0.0, 1.0] zugeschnitten wurde."
            },
            "order": "uniqueOrder"
        },
        "touch-action": {
            "syntax": "auto | none | [ pan-x || pan-y ] | manipulation",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Pointer Events"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "all elements except: non-replaced inline elements, table rows, row groups, table columns, and column groups",
                "de": "alle Elemente außer: nicht ersetzte Inlineelemente, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen",
                "ja": "\u6b21\u3092\u9664\u304f\u5168\u8981\u7d20: \u975e\u7f6e\u63db\u30a4\u30f3\u30e9\u30a4\u30f3\u8981\u7d20\u304a\u3088\u3073\u30c6\u30fc\u30d6\u30eb\u884c\u3001\u884c\u30b0\u30eb\u30fc\u30d7\u3001\u30c6\u30fc\u30d6\u30eb\u5217\u3001\u5217\u30b0\u30eb\u30fc\u30d7"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "pointer-events": {
            "syntax": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Pointer Events"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "initial-letter": {
            "syntax": "normal | [&lt;number&gt; &lt;integer&gt;?]",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Inline"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": {
                "en-US": "::first-letter pseudo-elements and inline-level first child of a block container"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "initial-letter-align": {
            "syntax": "[ auto | alphabetic | hanging | ideographic ]",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Inline"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "::first-letter pseudo-elements and inline-level first child of a block container"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "display-inside": {
            "syntax": "auto | block | table | flex | grid | ruby",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Display"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "a keyword"
            },
            "order": "uniqueOrder"
        },
        "display-outside": {
            "syntax": "block-level | inline-level | run-in | contents | none | table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Display"
            ],
            "initial": "<code>inline-level<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "display-list": {
            "syntax": "none | list-item",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Display"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "box-suppress": {
            "syntax": "show | discard | hide",
            "media": "all",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Display"
            ],
            "initial": "<code>show<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "see prose"
            },
            "order": "uniqueOrder"
        },
        "scroll-behavior": {
            "syntax": "auto | smooth",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSSOM View"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "scrolling boxes"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "block-size": {
            "syntax": "&lt;'width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "blockSizeOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "sameAsWidthAndHeight",
            "computed": {
                "en-US": "same as {{cssxref(\"width\")}} and {{cssxref(\"height\")}}"
            },
            "order": "uniqueOrder"
        },
        "inline-size": {
            "syntax": "&lt;'width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "inlineSizeOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "sameAsWidthAndHeight",
            "computed": {
                "en-US": "same as {{cssxref(\"width\")}} and {{cssxref(\"height\")}}"
            },
            "order": "uniqueOrder"
        },
        "min-block-size": {
            "syntax": "&lt;'min-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "blockSizeOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsWidthAndHeight",
            "computed": {
                "en-US": "same as {{cssxref(\"min-width\")}} and {{cssxref(\"min-height\")}}"
            },
            "order": "uniqueOrder"
        },
        "min-inline-size": {
            "syntax": "&lt;'min-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "inlineSizeOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsWidthAndHeight",
            "computed": {
                "en-US": "same as {{cssxref(\"min-width\")}} and {{cssxref(\"min-height\")}}"
            },
            "order": "uniqueOrder"
        },
        "max-block-size": {
            "syntax": "&lt;'max-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "blockSizeOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsWidthAndHeight",
            "computed": {
                "en-US": "same as {{cssxref(\"max-width\")}} and {{cssxref(\"max-height\")}}"
            },
            "order": "uniqueOrder"
        },
        "max-inline-size": {
            "syntax": "&lt;'max-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "inlineSizeOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsWidthAndHeight",
            "computed": {
                "en-US": "same as {{cssxref(\"max-width\")}} and {{cssxref(\"max-height\")}}"
            },
            "order": "uniqueOrder"
        },
        "margin-block-start": {
            "syntax": "&lt;'margin-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "dependsOnLayoutModel",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsMargin",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "margin-block-end": {
            "syntax": "&lt;'margin-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "dependsOnLayoutModel",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsMargin",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "margin-inline-start": {
            "syntax": "&lt;'margin-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "dependsOnLayoutModel",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsMargin",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "margin-inline-end": {
            "syntax": "&lt;'margin-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "dependsOnLayoutModel",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "sameAsMargin",
            "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
            "order": "uniqueOrder"
        },
        "offset-block-start": {
            "syntax": "&lt;'left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": {
                "en-US": "logical-height of containing block"
            },
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "sameAsBoxOffsets",
            "order": "uniqueOrder"
        },
        "offset-block-end": {
            "syntax": "&lt;'left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": {
                "en-US": "logical-height of containing block"
            },
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "sameAsBoxOffsets",
            "order": "uniqueOrder"
        },
        "offset-inline-start": {
            "syntax": "&lt;'left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "sameAsBoxOffsets",
            "order": "uniqueOrder"
        },
        "offset-inline-end": {
            "syntax": "&lt;'left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": "positionedElements",
            "computed": "sameAsBoxOffsets",
            "order": "uniqueOrder"
        },
        "padding-block-start": {
            "syntax": "&lt;'padding-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asLength",
            "order": "uniqueOrder"
        },
        "padding-block-end": {
            "syntax": "&lt;'padding-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asLength",
            "order": "uniqueOrder"
        },
        "padding-inline-start": {
            "syntax": "&lt;'padding-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asLength",
            "order": "uniqueOrder"
        },
        "padding-inline-end": {
            "syntax": "&lt;'padding-left'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asLength",
            "order": "uniqueOrder"
        },
        "border-block-start-width": {
            "syntax": "&lt;'border-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
            "order": "uniqueOrder"
        },
        "border-block-end-width": {
            "syntax": "&lt;'border-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
            "order": "uniqueOrder"
        },
        "border-inline-start-width": {
            "syntax": "&lt;'border-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
            "order": "uniqueOrder"
        },
        "border-inline-end-width": {
            "syntax": "&lt;'border-width'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "logicalWidthOfContainingBlock",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>medium<\/code>",
            "appliesto": "allElements",
            "computed": "absoluteLengthZeroIfBorderStyleNoneOrHidden",
            "order": "uniqueOrder"
        },
        "border-block-start-style": {
            "syntax": "&lt;'border-style'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "border-block-end-style": {
            "syntax": "&lt;'border-style'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "border-inline-start-style": {
            "syntax": "&lt;'border-style'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "border-inline-end-style": {
            "syntax": "&lt;'border-style'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "border-block-start-color": {
            "syntax": "&lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>currentcolor<\/code>",
            "appliesto": "allElements",
            "computed": "computedColor",
            "order": "uniqueOrder"
        },
        "border-block-end-color": {
            "syntax": "&lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>currentcolor<\/code>",
            "appliesto": "allElements",
            "computed": "computedColor",
            "order": "uniqueOrder"
        },
        "border-inline-start-color": {
            "syntax": "&lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>currentcolor<\/code>",
            "appliesto": "allElements",
            "computed": "computedColor",
            "order": "uniqueOrder"
        },
        "border-inline-end-color": {
            "syntax": "&lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": "<code>currentcolor<\/code>",
            "appliesto": "allElements",
            "computed": "computedColor",
            "order": "uniqueOrder"
        },
        "border-block-start": {
            "syntax": "&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": [
                "border-width",
                "border-style",
                "color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-width",
                "border-style",
                "color"
            ],
            "order": "uniqueOrder"
        },
        "border-block-end": {
            "syntax": "&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": [
                "border-width",
                "border-style",
                "color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-width",
                "border-style",
                "color"
            ],
            "order": "uniqueOrder"
        },
        "border-inline-start": {
            "syntax": "&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": [
                "border-width",
                "border-style",
                "color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-width",
                "border-style",
                "color"
            ],
            "order": "uniqueOrder"
        },
        "border-inline-end": {
            "syntax": "&lt;'border-width'&gt; || &lt;'border-style'&gt; || &lt;'color'&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Logical Properties"
            ],
            "initial": [
                "border-width",
                "border-style",
                "color"
            ],
            "appliesto": "allElements",
            "computed": [
                "border-width",
                "border-style",
                "color"
            ],
            "order": "uniqueOrder"
        },
        "ruby-position": {
            "syntax": "over | under | inter-character",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Ruby"
            ],
            "initial": "<code>over<\/code>",
            "appliesto": {
                "en-US": "ruby annotations containers"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "ruby-merge": {
            "syntax": "separate | collapse | auto",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Ruby"
            ],
            "initial": "<code>separate<\/code>",
            "appliesto": {
                "en-US": "ruby annotations containers"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "ruby-align": {
            "syntax": "start | center | space-between | space-around",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Ruby"
            ],
            "initial": "<code>space-around<\/code>",
            "appliesto": {
                "en-US": "ruby bases, ruby annotations, ruby base containers, ruby annotation containers "
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "scroll-snap-type": {
            "syntax": "none | mandatory | proximity",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Scroll Snap Points"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "scrollContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "scroll-snap-type-x": {
            "syntax": "none | mandatory | proximity",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Scroll Snap Points"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "scrollContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "scroll-snap-type-y": {
            "syntax": "none | mandatory | proximity",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Scroll Snap Points"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "scrollContainers",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "scroll-snap-points-x": {
            "syntax": "none | repeat(&lt;length&gt;)",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "relativeToScrollContainerPaddingBoxAxis",
            "groups": [
                "CSS Scroll Snap Points"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "scrollContainers",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder"
        },
        "scroll-snap-points-y": {
            "syntax": "none | repeat(&lt;length&gt;)",
            "media": "interactive",
            "inherited": false,
            "animatable": "no",
            "percentages": "relativeToScrollContainerPaddingBoxAxis",
            "groups": [
                "CSS Scroll Snap Points"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "scrollContainers",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder"
        },
        "scroll-snap-destination": {
            "syntax": "&lt;position&gt;",
            "media": "interactive",
            "inherited": false,
            "animatable": {
                "as": "position"
            },
            "percentages": "relativeToScrollContainerPaddingBoxAxis",
            "groups": [
                "CSS Scroll Snap Points"
            ],
            "initial": "<code>0px 0px<\/code>",
            "appliesto": "scrollContainers",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder"
        },
        "scroll-snap-coordinate": {
            "syntax": "none | &lt;position&gt;#",
            "media": "interactive",
            "inherited": false,
            "animatable": {
                "as": "position"
            },
            "percentages": {
                "en-US": "refer to the element\u2019s border box"
            },
            "groups": [
                "CSS Scroll Snap Points"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecifiedRelativeToAbsoluteLengths",
            "order": "uniqueOrder"
        },
        "-moz-outline-radius": {
            "syntax": "&lt;outline-radius&gt;{1,4} [ / &lt;outline-radius&gt;{1,4}]?",
            "media": "visual",
            "inherited": false,
            "animatable": [
                "-moz-outline-radius-topleft",
                "-moz-outline-radius-topright",
                "-moz-outline-radius-bottomright",
                "-moz-outline-radius-bottomleft"
            ],
            "percentages": [
                "-moz-outline-radius-topleft",
                "-moz-outline-radius-topright",
                "-moz-outline-radius-bottomright",
                "-moz-outline-radius-bottomleft"
            ],
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": [
                "-moz-outline-radius-topleft",
                "-moz-outline-radius-topright",
                "-moz-outline-radius-bottomright",
                "-moz-outline-radius-bottomleft"
            ],
            "appliesto": "allElements",
            "computed": [
                "-moz-outline-radius-topleft",
                "-moz-outline-radius-topright",
                "-moz-outline-radius-bottomright",
                "-moz-outline-radius-bottomleft"
            ],
            "order": "uniqueOrder"
        },
        "-moz-outline-radius-topleft": {
            "syntax": "&lt;outline-radius&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "yes",
            "percentages": "yes",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-outline-radius-topright": {
            "syntax": "&lt;outline-radius&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "yes",
            "percentages": "yes",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-outline-radius-bottomright": {
            "syntax": "&lt;outline-radius&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "yes",
            "percentages": "yes",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-outline-radius-bottomleft": {
            "syntax": "&lt;outline-radius&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "yes",
            "percentages": "yes",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-image-region": {
            "syntax": "&lt;shape&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "XUL {{XULElem(\"image\")}} elements and {{cssxref(\":-moz-tree-image\")}}, {{cssxref(\":-moz-tree-twisty\")}}, and {{cssxref(\":-moz-tree-checkbox\")}} pseudo-elements. <strong>Note:</strong> <code>-moz-image-region</code> only works with {{XULElem(\"image\")}} elements where the icon is specified using {{cssxref(\"list-style-image\")}}. It will not work with XUL <code>&lt;image src=\"url\" /&gt;<\/code>.",
                "de": "XUL {{XULElem(\"image\")}} Elementen und {{cssxref(\":-moz-tree-image\")}}, {{cssxref(\":-moz-tree-twisty\")}} und {{cssxref(\":-moz-tree-checkbox\")}} Pseudoelementen. <strong>Hinweis:</strong> <code>-moz-image-region</code> funktioniert nur mit {{XULElem(\"image\")}} Elementen, bei denen das Symbol durch {{cssxref(\"list-style-image\")}} angegeben wird. Es funktioniert nicht mit XUL <code>&lt;image src=\"url\" /&gt;<\/code>."
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-text-blink": {
            "syntax": "none | blink",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-force-broken-image-icon": {
            "syntax": "&lt;integer&gt;",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": {
                "en-US": "images",
                "de": "Bilder"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-webkit-box-reflect": {
            "syntax": "[ above | below | right | left ]? &lt;length&gt;? &lt;image&gt;?",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "box-orient": {
            "syntax": "horizontal | vertical | inline-axis | block-axis | inherit",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions",
                "WebKit Extensions"
            ],
            "initial": {
                "en-US": "<code>inline-axis<\/code> (<code>horizontal<\/code> in <a href=\"/en-US/docs/Mozilla/Tech/XUL\">XUL<\/a>)",
                "de": "<code>inline-axis<\/code> (<code>horizontal<\/code> in <a href=\"/de/docs/Mozilla/Tech/XUL\">XUL<\/a>)"
            },
            "appliesto": {
                "en-US": "elements with a CSS {{cssxref(\"display\")}} value of <code>box<\/code> or <code>inline-box<\/code>",
                "de": "Elemente mit einem CSS {{cssxref(\"display\")}} Wert von <code>box<\/code> oder <code>inline-box<\/code>"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "box-direction": {
            "syntax": "normal | reverse | inherit",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions",
                "WebKit Extensions"
            ],
            "initial": "<code>normal<\/code>",
            "appliesto": {
                "en-US": "elements with a CSS {{cssxref(\"display\")}} value of <code>box<\/code> or <code>inline-box<\/code>",
                "de": "Elemente mit einem CSS {{cssxref(\"display\")}} Wert von <code>box<\/code> oder <code>inline-box<\/code>"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "box-align": {
            "syntax": "start | center | end | baseline | stretch",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions",
                "WebKit Extensions"
            ],
            "initial": "<code>stretch<\/code>",
            "appliesto": {
                "en-US": "elements with a CSS {{cssxref(\"display\")}} value of <code>box<\/code> or <code>inline-box<\/code>",
                "de": "Elemente mit einem CSS {{cssxref(\"display\")}} Wert von <code>box<\/code> oder <code>inline-box<\/code>"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "azimuth": {
            "syntax": "&lt;angle&gt; | [[ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards",
            "media": "aural",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Speech"
            ],
            "initial": "<code>center<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "normalized angle",
                "de": "normalisierter Winkel"
            },
            "order": "orderOfAppearance"
        },
        "marker-offset": {
            "syntax": "&lt;length&gt; | auto",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "CSS Generated Content"
            ],
            "initial": "<code>auto<\/code>",
            "appliesto": {
                "en-US": "elements with <code>{{cssxref(\"display\")}}: marker;<\/code>",
                "de": "Elemente mit <code>{{cssxref(\"display\")}}: marker;<\/code>"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-webkit-mask": {
            "syntax": "&lt;mask-image&gt; [&lt;mask-repeat&gt; || &lt;mask-attachment&gt; || &lt;mask-position&gt; || &lt;mask-origin&gt; || &lt;mask-clip&gt;]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": [
                "-webkit-mask-image",
                "-webkit-mask-repeat",
                "-webkit-mask-attachment",
                "-webkit-mask-position",
                "-webkit-mask-origin",
                "-webkit-mask-clip"
            ],
            "appliesto": "allElements",
            "computed": [
                "-webkit-mask-image",
                "-webkit-mask-repeat",
                "-webkit-mask-attachment",
                "-webkit-mask-position",
                "-webkit-mask-origin",
                "-webkit-mask-clip"
            ],
            "order": "uniqueOrder"
        },
        "-webkit-mask-image": {
            "syntax": "&lt;mask-image&gt;[, &lt;mask-image&gt;]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "absolute URI or <code>none<\/code>",
                "de": "absolute URI oder <code>none<\/code>"
            },
            "order": "orderOfAppearance"
        },
        "-webkit-mask-repeat": {
            "syntax": "&lt;repeat-style&gt;[, &lt;repeat-style&gt;]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>repeat<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance"
        },
        "-webkit-mask-attachment": {
            "syntax": "&lt;attachment&gt;[, &lt;attachment&gt;]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>scroll<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance"
        },
        "-webkit-mask-position": {
            "syntax": "&lt;mask-position&gt;[, &lt;mask-position&gt;]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": {
                "en-US": "refer to the size of the box itself",
                "de": "beziehen sich auf die Größe der Box selbst"
            },
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>0% 0%<\/code>",
            "appliesto": "allElements",
            "computed": {
                "en-US": "for {{cssxref(\"length\")}} the absolute value, otherwise a percentage",
                "de": "für {{cssxref(\"length\")}} der absolute Wert, ansonsten ein Prozentwert"
            },
            "order": "orderOfAppearance"
        },
        "-webkit-mask-origin": {
            "syntax": "[ padding | border | content ][, [ border | padding | content ]]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>padding<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance"
        },
        "-webkit-mask-clip": {
            "syntax": "&lt;clip-style&gt;[, &lt;clip-style&gt;]*",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>border<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "orderOfAppearance"
        },
        "-moz-box-pack": {
            "syntax": "start | center | end | justify",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions",
                "WebKit Extensions"
            ],
            "initial": "<code>start<\/code>",
            "appliesto": {
                "en-US": "elements with a CSS {{cssxref(\"display\")}} value of <code>-moz-box<\/code>, <code>-moz-inline-box<\/code>, <code>-webkit-box<\/code> or <code>-webkit-inline-box<\/code>",
                "de": "Elemente mit einem CSS {{cssxref(\"display\")}} Wert von <code>-moz-box<\/code>, <code>-moz-inline-box<\/code>, <code>-webkit-box<\/code> oder <code>-webkit-inline-box<\/code>"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-orient": {
            "syntax": "inline | block | horizontal | vertical",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>inline<\/code>",
            "appliesto": {
                "en-US": "any element; it has an effect on {{HTMLElement(\"progress\")}} and {{HTMLElement(\"meter\")}}, but not on &lt;input type=\"range\"&gt; or other elements",
                "de": "beliebige Elemente; es hat eine Auswirkung auf {{HTMLElement(\"progress\")}} und {{HTMLElement(\"meter\")}}, aber nicht auf &lt;input type=\"range\"&gt; oder andere Elemente"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "overflow-clip-box": {
            "syntax": "padding-box | content-box",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>padding-box<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-appearance": {
            "syntax": "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions",
                "WebKit Extensions"
            ],
            "initial": {
                "en-US": "<code>none<\/code> (but this value is overriden in the user agent CSS)",
                "de": "<code>none<\/code> (aber dieser Wert wird im User Agent CSS überschrieben)"
            },
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-user-input": {
            "syntax": "none | enabled | disabled",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-user-modify": {
            "syntax": "read-only | read-write | write-only",
            "media": "interactive",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>read-only<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-webkit-text-stroke": {
            "syntax": "&lt;length&gt; &lt;color&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": [
                "-webkit-text-stroke-color"
            ],
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": [
                "-webkit-text-stroke-width",
                "-webkit-text-stroke-color"
            ],
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-webkit-text-stroke-color": {
            "syntax": "&lt;color&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": {
                "as": "color"
            },
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>rgb(0, 0, 0)<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-webkit-text-stroke-width": {
            "syntax": "&lt;length&gt;",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "WebKit Extensions"
            ],
            "initial": "<code>0<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-stack-sizing": {
            "syntax": "ignore | stretch-to-fit",
            "media": "visual",
            "inherited": true,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>stretch-to-fit<\/code>",
            "appliesto": "allElements",
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-window-shadow": {
            "syntax": "default | menu | tooltip | sheet | none",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>default<\/code>",
            "appliesto": {
                "en-US": "all elements that create native windows, e.g. &lt;window&gt;, &lt;panel&gt;",
                "de": "alle Elemente, die native Fenster erstellen, z. B. &lt;window&gt;, &lt;panel&gt;"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        },
        "-moz-binding": {
            "syntax": "&lt;uri&gt; | none",
            "media": "visual",
            "inherited": false,
            "animatable": "no",
            "percentages": "no",
            "groups": [
                "Mozilla Extensions"
            ],
            "initial": "<code>none<\/code>",
            "appliesto": {
                "en-US": "all elements except generated content or pseudo-elements",
                "de": "alle Elemente außer generierte Inhalte oder Pseudoelemente",
                "ja": "全要素（※但し、 generated content 及び pseudo-elements を除く）"
            },
            "computed": "asSpecified",
            "order": "uniqueOrder"
        }
    },
    "syntaxes": {
        "color": "&lt;rgb()&gt; | &lt;rgba()&gt; | &lt;hsl()&gt; | &lt;hsla()&gt; | &lt;hex-color&gt; | &lt;named-color&gt; | currentcolor | &lt;deprecated-system-color&gt;",
        "rgb()": "rgb( &lt;rgb-component&gt;#{3} )",
        "rgba()": "rgba( &lt;rgb-component&gt;#{3} , &lt;alpha-value&gt; )",
        "rgb-component": "&lt;integer&gt; | &lt;percentage&gt;",
        "alpha-value": "&lt;number&gt;",
        "hsl()": "hsl( &lt;hue&gt;, &lt;percentage&gt;, &lt;percentage&gt; )",
        "hsla()": "hsla( &lt;hue&gt;, &lt;percentage&gt;, &lt;percentage&gt;, &lt;alpha-value&gt; )",
        "hue": "&lt;number&gt;",
        "named-color": "&lt;ident&gt;",
        "deprecated-system-color": "ActiveBorder | ActiveCaption | AppWorkspace | Background | ButtonFace | ButtonHighlight | ButtonShadow | ButtonText | CaptionText | GrayText | Highlight | HighlightText | InactiveBorder | InactiveCaption | InactiveCaptionText | InfoBackground | InfoText | Menu | MenuText | Scrollbar | ThreeDDarkShadow | ThreeDFace | ThreeDHighlight | ThreeDLightShadow | ThreeDShadow | Window | WindowFrame | WindowText",
        "single-animation-direction": "normal | reverse | alternate | alternate-reverse",
        "single-animation-fill-mode": "none | forwards | backwards | both",
        "single-animation-iteration-count": "infinite | &lt;number&gt;",
        "single-animation-name": "none | IDENT",
        "single-animation-play-state": "running | paused",
        "single-transition": "[ none | &lt;single-transition-property&gt; ] || &lt;time&gt; || &lt;single-transition-timing-function&gt; || &lt;time&gt;",
        "single-transition-property": "all | IDENT",
        "transform-list": "&lt;transform-function&gt;+",
        "shadow-t": "[ &lt;length&gt;{2,3} &amp;&amp; &lt;color&gt;? ]",
        "bg-layer": "&lt;bg-image&gt; || &lt;position&gt; [ \/ &lt;bg-size&gt; ]? || &lt;repeat-style&gt; || &lt;attachment&gt; || &lt;box&gt;{1,2}",
        "final-bg-layer": "&lt;bg-image&gt; || &lt;position&gt; [ \/ &lt;bg-size&gt; ]? || &lt;repeat-style&gt; || &lt;attachment&gt; || &lt;box&gt; || &lt;box&gt; || &lt;'background-color'&gt;",
        "attachment": "scroll | fixed | local",
        "box": "border-box | padding-box | content-box",
        "bg-image": "none | &lt;image&gt;",
        "repeat-style": "repeat-x | repeat-y | [repeat | space | round | no-repeat]{1,2}",
        "bg-size": "[ &lt;length&gt; | &lt;percentage&gt; | auto ]{1,2} | cover | contain",
        "br-style": "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset",
        "br-width": "&lt;length&gt; | thin | medium | thick",
        "shadow": "inset? &amp;&amp; &lt;length&gt;{2,4} &amp;&amp; &lt;color&gt;?",
        "font-variant-css21": "[normal | small-caps]",
        "family-name": "&lt;string&gt; | &lt;IDENT&gt;+",
        "generic-family": "serif | sans-serif | cursive | fantasy | monospace",
        "absolute-size": "xx-small | s-small | small | medium | large | x-large | xx-large",
        "relative-size": "larger | smaller",
        "feature-tag-value": "&lt;string&gt; [ &lt;integer&gt; | on | off ]?",
        "common-lig-values": "[ common-ligatures | no-common-ligatures ]",
        "discretionary-lig-values": "[ discretionary-ligatures | no-discretionary-ligatures ]",
        "historical-lig-values": "[ historical-ligatures | no-historical-ligatures ]",
        "contextual-alt-values": "[ contextual | no-contextual ]",
        "numeric-figure-values": "[ lining-nums | oldstyle-nums ]",
        "numeric-spacing-values": "[ proportional-nums | tabular-nums ]",
        "numeric-fraction-values": "[ diagonal-fractions | stacked-fractions ]",
        "east-asian-variant-values": "[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]",
        "east-asian-width-values": "[ full-width | proportional-width ]",
        "feature-value-name": "IDENT",
        "counter-style": "&lt;counter-style-name&gt; | symbols()",
        "counter-style-name": "&lt;custom-ident&gt;",
        "mask-layer": "&lt;mask-reference&gt; &lt;masking-mode&gt;? || &lt;position&gt; [ \/ &lt;bg-size&gt; ]? || &lt;repeat-style&gt; || &lt;geometry-box&gt; || [ &lt;geometry-box&gt; | no-clip ] || &lt;compositing-operator&gt;",
        "mask-reference": "none | &lt;image&gt; | &lt;mask-source&gt;",
        "mask-source": "&lt;url&gt;",
        "masking-mode": "alpha | luminance | auto",
        "compositing-operator": "add | subtract | intersect | exclude",
        "filter-function-list": "[ &lt;filter-function&gt; | &lt;url&gt; ]+",
        "filter-function": "&lt;blur()&gt; | &lt;brightness()&gt; | &lt;contrast()&gt; | &lt;drop-shadow()&gt; | &lt;grayscale()&gt; | &lt;hue-rotate()&gt; | &lt;invert()&gt; | &lt;opacity()&gt; | &lt;sepia()&gt; | &lt;saturate()&gt;",
        "blur()": "blur( <length> )",
        "brightness()": "brightness( [ &lt;number&gt; | &lt;percentage&gt; ] )",
        "contrast()": "contrast( [ &lt;number&gt; | &lt;percentage&gt; ] )",
        "drop-shadow()": "drop-shadow( &lt;length&gt;{2,3} &lt;color&gt;? )",
        "grayscale()": "grayscale( [ &lt;number&gt; | &lt;percentage&gt; ] )",
        "hue-rotate()": "hue-rotate( &lt;angle&gt; )",
        "invert()": "invert( [ &lt;number&gt; | &lt;percentage&gt; ] )",
        "opacity()": "opacity( [ &lt;number&gt; | &lt;percentage&gt; ] )",
        "saturate()": "saturate( [ &lt;number&gt; | &lt;percentage&gt; ] )",
        "sepia()": "sepia( [ &lt;number&gt; | &lt;percentage&gt; ] )",
        "shape": "rect(&lt;top&gt;, &lt;right&gt;, &lt;bottom&gt;, &lt;left&gt;)",
        "clip-source": "&lt;url&gt;",
        "geometry-box": "&lt;shape-box&gt; | fill-box | stroke-box | view-box",
        "shape-box": "&lt;box&gt; | margin-box",
        "animateable-feature": "scroll-position | contents | &lt;custom-ident&gt;",
        "viewport-length": "auto | &lt;length&gt; | &lt;percentage&gt;",
        "symbol": "&lt;string&gt; | &lt;image&gt; | &lt;ident&gt;",
        "generic-name": "serif | sans-serif | cursive | fantasy | monospace",
        "mask-position": "[ &lt;percentage&gt; | &lt;length&gt; | left | center | right ] [ &lt;percentage&gt; | &lt;length&gt; | top  | center | bottom ]?",
        "namespace-prefix": "IDENT"
    },
    "atRules": {
        "@charset": {
            "syntax": "@charset \"&lt;charset&gt;\";",
            "groups": [
                "CSS Charsets"
            ]
        },
        "@counter-style": {
            "syntax": "@counter-style &lt;counter-style-name&gt; {\n  [ system: &lt;counter-system&gt;; ] ||\n  [ symbols: &lt;counter-symbols&gt;; ] ||\n  [ additive-symbols: &lt;additive-symbols&gt;; ] ||\n  [ negative: &lt;negative-symbol&gt;; ] ||\n  [ prefix: &lt;prefix&gt;; ] ||\n  [ suffix: &lt;suffix&gt;; ] ||\n  [ range: &lt;range&gt;; ] ||\n  [ pad: &lt;padding&gt;; ] ||\n  [ speak-as: &lt;speak-as&gt;; ] ||\n  [ fallback: &lt;counter-style-name&gt;; ]\n}",
            "interfaces": [
                "CSSCounterStyleRule"
            ],
            "groups": [
                "CSS Lists and Counters"
            ],
            "descriptors": {
                "system": {
                    "syntax": "cyclic | numeric | alphabetic | symbolic | additive | [fixed &lt;integer&gt;?] | [ extends &lt;counter-style-name&gt; ]",
                    "media": "all",
                    "initial": "<code>symbolic<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "negative": {
                    "syntax": "&lt;symbol&gt; &lt;symbol&gt;?",
                    "media": "all",
                    "initial": "\"-\" hyphen-minus",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "prefix": {
                    "syntax": "&lt;symbol&gt;",
                    "media": "all",
                    "initial": "the empty string",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "suffix": {
                    "syntax": "&lt;symbol&gt;",
                    "media": "all",
                    "initial": "\".\" full stop followed by a space",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "range": {
                    "syntax": "[ [ &lt;integer&gt; | infinite ]{2} ]# | auto",
                    "media": "all",
                    "initial": "<code>auto<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "pad": {
                    "syntax": "&lt;integer&gt; &amp;&amp; &lt;symbol&gt;",
                    "media": "all",
                    "initial": "<code>0 \"\"<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "fallback": {
                    "syntax": "&lt;counter-style-name&gt;",
                    "media": "all",
                    "initial": "<code>decimal<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "symbols": {
                    "syntax": "&lt;symbol&gt;+",
                    "media": "all",
                    "initial": "N\/A",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "additive-symbols": {
                    "syntax": "[ &lt;integer&gt; &amp;&amp; &lt;symbol&gt; ]#",
                    "media": "all",
                    "initial": "N\/A",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "speak-as": {
                    "syntax": "auto | bullets | numbers | words | spell-out | &lt;counter-style-name&gt;",
                    "media": "all",
                    "initial": "<code>auto<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                }
            }
        },
        "@document": {
            "syntax": "@document [ &lt;url&gt; | url-prefix(&lt;string&gt;) | domain(&lt;string&gt;) | regexp(&lt;string&gt;) ]# {\n  &lt;group-rule-body&gt;\n}",
            "interfaces": [
                "CSSGroupingRule",
                "CSSConditionRule"
            ],
            "groups": [
                "CSS Conditional Rules"
            ]
        },
        "@font-face": {
            "syntax": "@font-face {\n  [ font-family: &lt;family-name&gt;; ] ||\n  [ src: [ &lt;uri&gt; [format(&lt;string&gt;#)]? | &lt;font-face-name&gt; ]#; ] ||\n  [ unicode-range: &lt;urange&gt;#; ] ||\n  [ font-variant: &lt;font-variant&gt;; ] ||\n  [ font-feature-settings: normal | &lt;feature-tag-value&gt;#; ] ||\n  [ font-stretch: &lt;font-stretch&gt;; ] ||\n  [ font-weight: &lt;weight&gt;; ] ||\n  [ font-style: &lt;style&gt;; ]\n}",
            "interfaces": [
                "CSSFontFaceRule"
            ],
            "groups": [
                "CSS Fonts"
            ],
            "descriptors": {
                "font-family": {
                    "syntax": "&lt;family-name&gt;",
                    "media": "all",
                    "initial": "n\/a (required)",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "src": {
                    "syntax": "[ &lt;url&gt; format(&lt;string&gt;#)? | local(&lt;family-name&gt;) ]#",
                    "media": "all",
                    "initial": "n\/a (required)",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "font-style": {
                    "syntax": "normal | italic | oblique",
                    "media": "all",
                    "initial": "<code>normal<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "font-weight": {
                    "syntax": "normal | bold | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900",
                    "media": "all",
                    "initial": "<code>normal<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "font-stretch": {
                    "syntax": "normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded",
                    "media": "all",
                    "initial": "<code>normal<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "unicode-range": {
                    "syntax": "&lt;unicode-range&gt;#",
                    "media": "all",
                    "initial": "<code>U+0-10FFFF<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "font-variant": {
                    "syntax": "normal | none | [ &lt;common-lig-values&gt; || &lt;discretionary-lig-values&gt; || &lt;historical-lig-values&gt; || &lt;contextual-alt-values&gt; || stylistic(&lt;feature-value-name&gt;) || historical-forms || styleset(&lt;feature-value-name&gt;#) || character-variant(&lt;feature-value-name&gt;#) || swash(&lt;feature-value-name&gt;) || ornaments(&lt;feature-value-name&gt;) || annotation(&lt;feature-value-name&gt;) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || &lt;numeric-figure-values&gt; || &lt;numeric-spacing-values&gt; || &lt;numeric-fraction-values&gt; || ordinal || slashed-zero || &lt;east-asian-variant-values&gt; || &lt;east-asian-width-values&gt; || ruby ]",
                    "media": "all",
                    "initial": "<code>normal<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "font-feature-settings": {
                    "syntax": "normal | &lt;feature-tag-value&gt;#",
                    "media": "all",
                    "initial": "<code>normal<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                }
            }
        },
        "@font-feature-values": {
            "syntax": "@font-feature-values &lt;font-family&gt; {\n  [ @swash | @ornaments | @annotation | @stylistic | @styleset | @character-variant\n    {\n      [ &lt;IDENT&gt;: &lt;integer&gt;+ ]?\n    }\n  ]?\n}",
            "interfaces": [
                "CSSFontFeatureValuesRule"
            ],
            "groups": [
                "CSS Fonts"
            ]
        },
        "@import": {
            "syntax": "@import [ &lt;string&gt; | &lt;url&gt; ] [&lt;media-query-list&gt;]?;",
            "groups": [
                "Media Queries"
            ]
        },
        "@keyframes": {
            "syntax": "@keyframes &lt;identifier&gt; {\n  [ [ from | to | &lt;percentage&gt; ] [, from | to | &lt;percentage&gt; ]* block ]*\n}",
            "interfaces": [
                "CSSKeyframeRule",
                "CSSKeyframesRule"
            ],
            "groups": [
                "CSS Animations"
            ]
        },
        "@media": {
            "syntax": "@media &lt;media-query-list&gt; {\n  &lt;group-rule-body&gt;\n}",
            "interfaces": [
                "CSSGroupingRule",
                "CSSConditionRule",
                "CSSMediaRule",
                "CSSCustomMediaRule"
            ],
            "groups": [
                "CSS Conditional Rules",
                "Media Queries"
            ]
        },
        "@namespace": {
            "syntax": "@namespace &lt;namespace-prefix&gt;? [ &lt;string&gt; | &lt;uri&gt; ];",
            "groups": [
                "CSS Namespaces"
            ]
        },
        "@page": {
            "syntax": "@page &lt;page-selector-list&gt; {\n  &lt;group-rule-body&gt;\n}",
            "interfaces": [
                "CSSPageRule"
            ],
            "groups": [
                "CSS Pages"
            ],
            "descriptors": {
                "marks": {
                    "syntax": "none | [ crop || cross ]",
                    "media": "visual, paged",
                    "initial": "<code>none<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "orderOfAppearance"
                },
                "bleed": {
                    "syntax": "auto | &lt;length&gt;",
                    "media": "visual, paged",
                    "initial": "<code>auto<\/code>",
                    "percentages": "no",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                }
            }
        },
        "@supports": {
            "syntax": "@supports &lt;supports-condition&gt; {\n  &lt;group-rule-body&gt;\n}",
            "interfaces": [
                "CSSGroupingRule",
                "CSSConditionRule",
                "CSSSupportsRule"
            ],
            "groups": [
                "CSS Conditional Rules"
            ]
        },
        "@viewport": {
            "syntax": "@viewport {\n  &lt;group-rule-body&gt;\n}",
            "interfaces": [
                "CSSViewportRule"
            ],
            "groups": [
                "CSS Device Adaptation"
            ],
            "descriptors": {
                "min-width": {
                    "syntax": "&lt;viewport-length&gt;",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": {
                        "en-US": "refer to the width of the initial viewport",
                        "de": "beziehen sich auf die Breite des urspr\u00fcnglichen Viewports"
                    },
                    "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
                    "order": "uniqueOrder"
                },
                "max-width": {
                    "syntax": "&lt;viewport-length&gt;",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": {
                        "en-US": "refer to the width of the initial viewport",
                        "de": "beziehen sich auf die Breite des urspr\u00fcnglichen Viewports"
                    },
                    "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
                    "order": "uniqueOrder"
                },
                "width": {
                    "syntax": "&lt;viewport-length&gt;{1,2}",
                    "media": "visual, continuous",
                    "initial": [
                        "min-width",
                        "max-width"
                    ],
                    "percentages": [
                        "min-width",
                        "max-width"
                    ],
                    "computed": [
                        "min-width",
                        "max-width"
                    ],
                    "order": "orderOfAppearance"
                },
                "min-height": {
                    "syntax": "&lt;viewport-length&gt;",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": {
                        "en-US": "refer to the height of the initial viewport",
                        "de": "beziehen sich auf die H\u00f6he des urspr\u00fcnglichen Viewports"
                    },
                    "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
                    "order": "uniqueOrder"
                },
                "max-height": {
                    "syntax": "&lt;viewport-length&gt;",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": {
                        "en-US": "refer to the height of the initial viewport",
                        "de": "beziehen sich auf die H\u00f6he des urspr\u00fcnglichen Viewports"
                    },
                    "computed": "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
                    "order": "uniqueOrder"
                },
                "height": {
                    "syntax": "&lt;viewport-length&gt;{1,2}",
                    "media": "visual, continuous",
                    "initial": [
                        "min-height",
                        "max-height"
                    ],
                    "percentages": [
                        "min-height",
                        "max-height"
                    ],
                    "computed": [
                        "min-height",
                        "max-height"
                    ],
                    "order": "orderOfAppearance"
                },
                "zoom": {
                    "syntax": "auto | &lt;number&gt; | &lt;percentage&gt;",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": "the zoom factor itself",
                    "computed": "autoNonNegativeOrPercentage",
                    "order": "uniqueOrder"
                },
                "min-zoom": {
                    "syntax": "auto | &lt;number&gt; | &lt;percentage&gt;",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": "the zoom factor itself",
                    "computed": "autoNonNegativeOrPercentage",
                    "order": "uniqueOrder"
                },
                "max-zoom": {
                    "syntax": "auto | &lt;number&gt; | &lt;percentage&gt;",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": "the zoom factor itself",
                    "computed": "autoNonNegativeOrPercentage",
                    "order": "uniqueOrder"
                },
                "user-zoom": {
                    "syntax": "zoom | fixed",
                    "media": "visual, continuous",
                    "initial": "<code>zoom<\/code>",
                    "percentages": "referToSizeOfBoundingBox",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                },
                "orientation": {
                    "syntax": "auto | portrait | landscape",
                    "media": "visual, continuous",
                    "initial": "<code>auto<\/code>",
                    "percentages": "referToSizeOfBoundingBox",
                    "computed": "asSpecified",
                    "order": "uniqueOrder"
                }
            }
        }
    },
    "selectors": {
        "Type selectors": {
            "syntax": "element",
            "groups": [
                "Basic Selectors"
            ]
        },
        "Class selectors": {
            "syntax": ".class",
            "groups": [
                "Basic Selectors"
            ]
        },
        "ID selectors": {
            "syntax": "#id",
            "groups": [
                "Basic Selectors"
            ]
        },
        "Universal selectors": {
            "syntax": "*",
            "groups": [
                "Basic Selectors"
            ]
        },
        "Attribute selectors": {
            "syntax": "[attr=value]",
            "groups": [
                "Basic Selectors"
            ]
        },
        "Adjacent sibling selectors": {
            "syntax": "A + B",
            "groups": [
                "Combinators"
            ]
        },
        "General sibling selectors": {
            "syntax": "A ~ B",
            "groups": [
                "Combinators"
            ]
        },
        "Child selectors": {
            "syntax": "A &gt; B",
            "groups": [
                "Combinators"
            ]
        },
        "Descendant selectors": {
            "syntax": "A B",
            "groups": [
                "Combinators"
            ]
        },
        ":active": {
            "syntax": ":active",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":any": {
            "syntax": ":any",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":checked": {
            "syntax": ":checked",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":dir": {
            "syntax": ":dir()",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":disabled": {
            "syntax": ":disabled",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":empty": {
            "syntax": ":empty",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":enabled": {
            "syntax": ":enabled",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":first": {
            "syntax": ":first",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":first-child": {
            "syntax": ":first-child",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":first-of-type": {
            "syntax": ":first-of-type",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":fullscreen": {
            "syntax": ":fullscreen",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":focus": {
            "syntax": ":focus",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":hover": {
            "syntax": ":hover",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":indeterminate": {
            "syntax": ":indeterminate",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":in-range": {
            "syntax": ":in-range",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":invalid": {
            "syntax": ":invalid",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":lang": {
            "syntax": ":lang()",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":last-child": {
            "syntax": ":last-child",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":last-of-type": {
            "syntax": ":last-of-type",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":left": {
            "syntax": ":left",
            "groups": [
                "Pseudo-classes",
                "CSS Pages"
            ]
        },
        ":link": {
            "syntax": ":link",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":not": {
            "syntax": ":not()",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":nth-child": {
            "syntax": ":nth-child()",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":nth-last-child": {
            "syntax": ":nth-last-child()",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":nth-last-of-type": {
            "syntax": ":nth-last-of-type()",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":nth-of-type": {
            "syntax": ":nth-of-type()",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":only-child": {
            "syntax": ":only-child",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":only-of-type": {
            "syntax": ":only-of-type",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":optional": {
            "syntax": ":optional",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":out-of-range": {
            "syntax": ":out-of-range",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":read-only": {
            "syntax": ":active",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":read-write": {
            "syntax": ":read-write",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":required": {
            "syntax": ":required",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":right": {
            "syntax": ":right",
            "groups": [
                "Pseudo-classes",
                "CSS Pages"
            ]
        },
        ":root": {
            "syntax": ":root",
            "groups": [
                "Pseudo-classes",
                "CSS Pages"
            ]
        },
        ":scope": {
            "syntax": ":scope",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":target": {
            "syntax": ":target",
            "groups": [
                "Pseudo-classes"
            ]
        },
        ":valid": {
            "syntax": ":valid",
            "groups": [
                "Pseudo-classes"
            ]
        },
        "::after": {
            "syntax": "::after",
            "groups": [
                "Pseudo-elements"
            ]
        },
        "::before": {
            "syntax": "::before",
            "groups": [
                "Pseudo-elements"
            ]
        },
        "::first-letter": {
            "syntax": "::first-letter",
            "groups": [
                "Pseudo-elements"
            ]
        },
        "::first-line": {
            "syntax": "::first-line",
            "groups": [
                "Pseudo-elements"
            ]
        },
        "::selection": {
            "syntax": "::selection",
            "groups": [
                "Pseudo-elements"
            ]
        },
        "::backdrop": {
            "syntax": "::backdrop",
            "groups": [
                "Pseudo-elements"
            ]
        }
    }
}));
