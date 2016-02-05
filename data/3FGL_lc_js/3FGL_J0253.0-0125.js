Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.35722601,  0.        ,  0.2684615 ,  1.19532084,        0.31150866,  0.19111635,  0.63504517,  0.43439367,  0.        ,        0.        ,  0.85229039,  0.04870597,  0.57229197,  0.22455302,        0.17105925,  0.2780188 ,  0.53201133,  0.8879292 ,  0.        ,        0.33530104,  0.30239826,  0.        ,  0.        ,  0.        ,        0.        ,  0.28884503,  0.73487824,  0.69135469,  0.79264188,        0.        ,  0.        ,  0.5339967 ,  0.        ,  0.        ,        1.00703371,  0.54582971,  0.57723683,  0.        ,  0.26740161,        0.89646834,  0.        ,  0.        ,  0.37954667,  0.26278442,        1.22023273,  0.33673617,  0.20202349]
FluxHistoryError = [[ 0.        ,  1.02865779],       [ 0.00457105,  0.85629892],       [ 0.        ,  1.1555208 ],       [ 0.        ,  1.36725238],       [ 0.53317612,  1.98767233],       [ 0.0867727 ,  0.67088079],       [ 0.        ,  1.71077015],       [ 0.23172584,  1.21719313],       [ 0.05750981,  0.97496355],       [ 0.        ,  1.05942416],       [ 0.        ,  1.05625856],       [ 0.3548663 ,  1.52730846],       [ 0.        ,  1.0511078 ],       [ 0.        ,  2.44429886],       [ 0.        ,  2.01459208],       [ 0.        ,  1.72851408],       [ 0.        ,  1.4763082 ],       [ 0.13040495,  1.11103511],       [ 0.40284804,  1.54901147],       [ 0.        ,  0.95844889],       [ 0.09178063,  0.80447716],       [ 0.02907696,  0.77063966],       [ 0.        ,  0.81226307],       [ 0.        ,  1.65347254],       [ 0.        ,  1.30405939],       [ 0.        ,  1.76586056],       [ 0.01412523,  0.76684058],       [ 0.05403686,  1.56232238],       [ 0.23557597,  1.30511296],       [ 0.32631469,  1.41078997],       [ 0.        ,  1.29838431],       [ 0.        ,  1.26757455],       [ 0.06315711,  1.19958377],       [ 0.        ,  1.24573219],       [ 0.        ,  1.08679903],       [ 0.40861279,  1.74995184],       [ 0.11751708,  1.18637455],       [ 0.08922985,  1.26136506],       [ 0.        ,  1.20637596],       [ 0.        ,  1.72822681],       [ 0.16991085,  1.74651361],       [ 0.        ,  1.51177263],       [ 0.        ,  1.12500119],       [ 0.        ,  2.00603119],       [ 0.        ,  1.69726115],       [ 0.62003046,  1.94253302],       [ 0.        ,  1.9205645 ],       [ 0.        ,  1.62798344]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.95808090e-03],       [  5.47000000e+02,   3.40060449e+00],       [  1.73200000e+03,   3.27127552e+00],       [  5.47700000e+03,   9.23152208e-01],       [  3.16220000e+04,   1.55570015e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   3.22884468e+01],       [  5.47000000e+02,   0.00000000e+00,   1.04625781e+01],       [  1.73200000e+03,   2.37693644e+00,   4.25419235e+00],       [  5.47700000e+03,   5.93226433e-01,   1.31356609e+00],       [  3.16220000e+04,   5.44706285e-02,   3.12512785e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]