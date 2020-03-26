const evalStub = {
  "plot": {
    "config": {
      "view": {
        "continuousWidth": 400,
        "continuousHeight": 300
      }
    },
    "layer": [
      {
        "mark": "line",
        "encoding": {
          "x": {
            "type": "quantitative",
            "axis": {
              "title": "Betriebsstunden"
            },
            "field": "x"
          },
          "y": {
            "type": "quantitative",
            "axis": {
              "format": "~s",
              "title": "Preis [€]"
            },
            "field": "mid"
          }
        }
      },
      {
        "mark": {
          "type": "errorband",
          "extent": "ci"
        },
        "encoding": {
          "x": {
            "type": "quantitative",
            "field": "x"
          },
          "y": {
            "type": "quantitative",
            "axis": {
              "title": "Preis [€]"
            },
            "field": "upper"
          },
          "y2": {
            "field": "lower"
          }
        }
      },
      {
        "mark": {
          "type": "line",
          "color": "red"
        },
        "encoding": {
          "x": {
            "type": "quantitative",
            "axis": {
              "title": "Betriebsstunden"
            },
            "field": "x"
          },
          "y": {
            "type": "quantitative",
            "field": "lower"
          }
        }
      },
      {
        "mark": {
          "type": "rule",
          "color": "gray",
          "strokeDash": [
            6,
            2
          ]
        },
        "encoding": {
          "x": {
            "type": "quantitative",
            "field": "x_pos"
          }
        },
        "transform": [
          {
            "calculate": "300",
            "as": "x_pos"
          }
        ]
      },
      {
        "data": {
          "name": "data-36439dec4fd9aef7876a8acacd4ce4f3"
        },
        "mark": {
          "type": "point",
          "size": 60
        },
        "encoding": {
          "color": {
            "type": "nominal",
            "field": "color",
            "legend": null
          },
          "x": {
            "type": "quantitative",
            "field": "x"
          },
          "y": {
            "type": "quantitative",
            "field": "y"
          }
        }
      }
    ],
    "data": {
      "name": "data-09a88263333892002b84fc06fb6b7b6f"
    },
    "$schema": "https://vega.github.io/schema/vega-lite/v4.0.2.json",
    "datasets": {
      "data-09a88263333892002b84fc06fb6b7b6f": [
        {
          "lower": 39077.112043354864,
          "upper": 60197.25143467969,
          "mid": 49637.18173901728,
          "x": 0.0
        },
        {
          "lower": 40921.48156581257,
          "upper": 60691.92350775624,
          "mid": 50806.7025367844,
          "x": 122.44897959183673
        },
        {
          "lower": 40921.48156581257,
          "upper": 60617.87150498159,
          "mid": 50769.676535397084,
          "x": 244.89795918367346
        },
        {
          "lower": 40537.472850875856,
          "upper": 60145.800762911895,
          "mid": 50341.636806893875,
          "x": 367.3469387755102
        },
        {
          "lower": 39986.67087708968,
          "upper": 59960.01049689003,
          "mid": 49973.34068698985,
          "x": 489.7959183673469
        },
        {
          "lower": 39796.68871273658,
          "upper": 59550.87240860152,
          "mid": 49673.78056066905,
          "x": 612.2448979591836
        },
        {
          "lower": 39224.244852775184,
          "upper": 59069.91727049821,
          "mid": 49147.081061636694,
          "x": 734.6938775510204
        },
        {
          "lower": 39078.68107984244,
          "upper": 59069.91727049821,
          "mid": 49074.29917517032,
          "x": 857.1428571428571
        },
        {
          "lower": 39116.759333297974,
          "upper": 58153.66523996404,
          "mid": 48635.21228663101,
          "x": 979.5918367346939
        },
        {
          "lower": 38326.68176803691,
          "upper": 57046.752000663204,
          "mid": 47686.716884350055,
          "x": 1102.0408163265306
        },
        {
          "lower": 38108.281553959576,
          "upper": 56961.99899005934,
          "mid": 47535.14027200946,
          "x": 1224.4897959183672
        },
        {
          "lower": 37344.79689333899,
          "upper": 56961.99899005934,
          "mid": 47153.397941699164,
          "x": 1346.938775510204
        },
        {
          "lower": 36892.80029243887,
          "upper": 55471.38942923732,
          "mid": 46182.0948608381,
          "x": 1469.3877551020407
        },
        {
          "lower": 36902.604482152645,
          "upper": 54821.27013837432,
          "mid": 45861.937310263485,
          "x": 1591.8367346938776
        },
        {
          "lower": 36885.57800043303,
          "upper": 53926.43399719358,
          "mid": 45406.0059988133,
          "x": 1714.2857142857142
        },
        {
          "lower": 36885.67735685552,
          "upper": 53926.43399719358,
          "mid": 45406.055677024546,
          "x": 1836.734693877551
        },
        {
          "lower": 36885.67735685552,
          "upper": 53926.43399719358,
          "mid": 45406.055677024546,
          "x": 1959.1836734693877
        },
        {
          "lower": 35920.36179820199,
          "upper": 53926.43399719358,
          "mid": 44923.39789769778,
          "x": 2081.6326530612246
        },
        {
          "lower": 35383.62392061253,
          "upper": 53926.43399719358,
          "mid": 44655.02895890306,
          "x": 2204.081632653061
        },
        {
          "lower": 35383.62392061253,
          "upper": 53926.43399719358,
          "mid": 44655.02895890306,
          "x": 2326.530612244898
        },
        {
          "lower": 34584.79699401121,
          "upper": 53926.43399719358,
          "mid": 44255.6154956024,
          "x": 2448.9795918367345
        },
        {
          "lower": 34584.79699401121,
          "upper": 52083.5000701936,
          "mid": 43334.14853210241,
          "x": 2571.4285714285716
        },
        {
          "lower": 34584.79699401121,
          "upper": 52083.5000701936,
          "mid": 43334.14853210241,
          "x": 2693.877551020408
        },
        {
          "lower": 32364.060120064194,
          "upper": 51054.4461666912,
          "mid": 41709.2531433777,
          "x": 2816.326530612245
        },
        {
          "lower": 31437.864699149424,
          "upper": 51054.4461666912,
          "mid": 41246.15543292031,
          "x": 2938.7755102040815
        },
        {
          "lower": 31732.778807333,
          "upper": 50920.20425176487,
          "mid": 41326.49152954893,
          "x": 3061.224489795918
        },
        {
          "lower": 31732.778807333,
          "upper": 50902.42484867467,
          "mid": 41317.60182800384,
          "x": 3183.673469387755
        },
        {
          "lower": 31732.778807333,
          "upper": 50651.35543697709,
          "mid": 41192.067122155044,
          "x": 3306.122448979592
        },
        {
          "lower": 31732.778807333,
          "upper": 50651.35543697709,
          "mid": 41192.067122155044,
          "x": 3428.5714285714284
        },
        {
          "lower": 31656.151172232094,
          "upper": 50651.35543697709,
          "mid": 41153.753304604594,
          "x": 3551.020408163265
        },
        {
          "lower": 31401.603448401285,
          "upper": 50651.35543697709,
          "mid": 41026.47944268919,
          "x": 3673.469387755102
        },
        {
          "lower": 31281.268700146145,
          "upper": 49432.95946143247,
          "mid": 40357.11408078931,
          "x": 3795.918367346939
        },
        {
          "lower": 31281.268700146145,
          "upper": 49432.95946143247,
          "mid": 40357.11408078931,
          "x": 3918.3673469387754
        },
        {
          "lower": 31281.268700146145,
          "upper": 49432.95946143247,
          "mid": 40357.11408078931,
          "x": 4040.816326530612
        },
        {
          "lower": 31281.268700146145,
          "upper": 49432.95946143247,
          "mid": 40357.11408078931,
          "x": 4163.265306122449
        },
        {
          "lower": 30512.38183018122,
          "upper": 48479.53627555613,
          "mid": 39495.959052868675,
          "x": 4285.714285714285
        },
        {
          "lower": 30226.955986753208,
          "upper": 48479.53627555613,
          "mid": 39353.246131154665,
          "x": 4408.163265306122
        },
        {
          "lower": 29280.798387296425,
          "upper": 47064.06196599182,
          "mid": 38172.43017664412,
          "x": 4530.6122448979595
        },
        {
          "lower": 29280.798387296425,
          "upper": 47064.06196599182,
          "mid": 38172.43017664412,
          "x": 4653.061224489796
        },
        {
          "lower": 29280.798387296425,
          "upper": 47064.06196599182,
          "mid": 38172.43017664412,
          "x": 4775.510204081633
        },
        {
          "lower": 29090.65504693122,
          "upper": 47064.06196599182,
          "mid": 38077.35850646152,
          "x": 4897.959183673469
        },
        {
          "lower": 28086.591542628856,
          "upper": 45021.52950021672,
          "mid": 36554.06052142278,
          "x": 5020.408163265306
        },
        {
          "lower": 27106.591542628856,
          "upper": 44261.741715599164,
          "mid": 35684.16662911401,
          "x": 5142.857142857143
        },
        {
          "lower": 27106.591542628856,
          "upper": 44261.741715599164,
          "mid": 35684.16662911401,
          "x": 5265.306122448979
        },
        {
          "lower": 27106.591542628856,
          "upper": 44261.741715599164,
          "mid": 35684.16662911401,
          "x": 5387.755102040816
        },
        {
          "lower": 27106.591542628856,
          "upper": 43253.258630227596,
          "mid": 35179.92508642822,
          "x": 5510.204081632653
        },
        {
          "lower": 27106.591542628856,
          "upper": 43253.258630227596,
          "mid": 35179.92508642822,
          "x": 5632.65306122449
        },
        {
          "lower": 27106.591542628856,
          "upper": 43161.186714629424,
          "mid": 35133.88912862914,
          "x": 5755.102040816327
        },
        {
          "lower": 26644.794357925297,
          "upper": 43224.461870300016,
          "mid": 34934.62811411265,
          "x": 5877.551020408163
        },
        {
          "lower": 26833.45647985414,
          "upper": 42677.630111344115,
          "mid": 34755.54329559913,
          "x": 6000.0
        }
      ],
      "data-36439dec4fd9aef7876a8acacd4ce4f3": [
        {
          "x": 300,
          "y": 50708.66695883327,
          "color": "blue"
        },
        {
          "x": 300,
          "y": 40921.48156581257,
          "color": "red"
        }
      ]
    }
  },
  "prediction": {
    "lower": 51000,
    "mid": 57103.48303501799,
    "upper": 63000,
    "spec": {
      "upper_quantile": 0.9,
      "lower_quantile": 0.1,
      "values": {
        "upper_quantile": 65326.78272940112,
        "median": 57103.48303501799,
        "lower_quantile": 48880.18334063486,
        "10_percent_up": 62813.8313385198,
        "10_percent_down": 51393.13473151619
      },
      "input_data": [
        {
          "brand": "Claas",
          "model": "Arion 640 Cebis",
          "PS": 110,
          "year": 2015,
          "engine_hours": 300,
          "fronthubwerk": true,
          "frontlader": true,
          "frontzapfwelle": false,
          "lenkautomatik": true,
          "lenkautomatik_vorgeruestet": false,
          "hydraulische_anhaengerbremse": false,
          "kabinenfederung": false,
          "bauart": false,
          "frontgewichte": false,
          "kabine": false,
          "allradantrieb": false,
          "adblue": false,
          "load_sensing": false,
          "klimaanlage": false,
          "kriechgang": false,
          "zugpendel": false,
          "lieferung_moeglich": false,
          "reifenprofiltiefe": false,
          "hydraulische_lenkung": false,
          "gefederte_vorderachse": false,
          "niedrigkabine": false,
          "frontlader_anbaukonsole": false,
          "rueckfahreinrichtung": false,
          "gps": false,
          "bordcomputer": false,
          "ehr": false,
          "maehbalken": false,
          "im_kundenauftrag": false,
          "druckluftbremsanlage": false,
          "finanzierung_moeglich": false,
          "mwst._ausweisbar": false,
          "rueckfahrkamera": false,
          "lastschaltbare_wendeschaltung": false,
          "category": "Traktoren"
        }
      ],
      "scheme": "percent_from_median",
      "model_def": "RangeRegressor",
      "version": 0.1
    }
  }
};

module.exports = evalStub;
