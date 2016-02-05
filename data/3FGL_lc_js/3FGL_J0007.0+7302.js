Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 38.24669266,  35.37854385,  34.66754913,  34.44065857,        30.51844215,  33.53879166,  34.46147537,  34.32994461,        32.59230423,  37.33888626,  33.81133652,  30.9497757 ,        37.13954163,  32.9993515 ,  33.79985428,  34.5892334 ,        36.03873062,  34.03928757,  36.6313324 ,  33.6348381 ,        36.56497192,  34.96797943,  35.21634674,  33.95436096,        32.29567337,  33.03761673,  33.87765503,  33.77796173,        33.2769928 ,  34.20116043,  36.22475433,  35.42934036,        31.16875648,  34.24184799,  32.4092865 ,  31.39621162,        30.75480461,  32.55026245,  35.96040726,  35.9113884 ,        32.88993073,  35.13083649,  32.96003342,  33.98137665,        36.12078857,  34.86956787,  35.61245346,  35.62793732]
FluxHistoryError = [[ 36.18371964,  40.30966568],       [ 33.45708084,  37.30000687],       [ 32.74238968,  36.59270859],       [ 32.55876541,  36.32255173],       [ 28.69597435,  32.34091187],       [ 31.64192772,  35.4356575 ],       [ 32.54789734,  36.37505341],       [ 32.29107666,  36.36881256],       [ 30.71890259,  34.46570587],       [ 35.36952591,  39.30824661],       [ 31.92900276,  35.69367218],       [ 29.17567253,  32.72387695],       [ 35.26824188,  39.01084137],       [ 31.324543  ,  34.67416   ],       [ 32.03902435,  35.5606842 ],       [ 32.91962814,  36.25883865],       [ 34.31253815,  37.7649231 ],       [ 32.32092285,  35.75765228],       [ 34.91452408,  38.34814072],       [ 31.91458893,  35.35508728],       [ 34.83938599,  38.29055786],       [ 33.2097702 ,  36.72618866],       [ 33.51923752,  36.91345596],       [ 32.23101425,  35.67770767],       [ 30.61999512,  33.97135162],       [ 31.24051476,  34.83472061],       [ 32.12356186,  35.6317482 ],       [ 32.09309006,  35.4628334 ],       [ 31.52749062,  35.02649307],       [ 32.49951935,  35.90280151],       [ 34.47527313,  37.97423553],       [ 33.651371  ,  37.20730972],       [ 29.42529869,  32.91221237],       [ 32.47352982,  36.01016617],       [ 30.7410965 ,  34.0774765 ],       [ 29.70059395,  33.09183121],       [ 29.1052227 ,  32.40438843],       [ 30.77890205,  34.32162094],       [ 34.19498062,  37.72583389],       [ 34.20281219,  37.6199646 ],       [ 31.16799927,  34.61186218],       [ 33.44448471,  36.81718826],       [ 31.23100281,  34.68906403],       [ 32.36009216,  35.60266113],       [ 34.33854675,  37.9030304 ],       [ 33.12749863,  36.61163712],       [ 33.89949417,  37.32541275],       [ 33.77677917,  37.47909546]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.66993201e+03],       [  5.47000000e+02,   1.11742578e+03],       [  1.73200000e+03,   4.81150726e+02],       [  5.47700000e+03,   1.53000076e+02],       [  3.16220000e+04,   1.44749947e+01]]
SpectrumError = [[  1.73000000e+02,   1.63182874e+03,   1.70803528e+03],       [  5.47000000e+02,   1.10513464e+03,   1.12971692e+03],       [  1.73200000e+03,   4.75484680e+02,   4.86816772e+02],       [  5.47700000e+03,   1.50123642e+02,   1.55876511e+02],       [  3.16220000e+04,   1.35924120e+01,   1.53575773e+01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]