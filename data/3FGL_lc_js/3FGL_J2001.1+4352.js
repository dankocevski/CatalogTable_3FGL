Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  6.80661297,   6.84736204,  10.40525532,  11.14693069,         7.51445627,  11.41835594,   7.06631041,  11.12324715,         6.80002069,   9.28988743,   9.9481144 ,  10.52384853,         8.96497631,  13.61316586,  24.24391174,  10.99830627,         8.10616684,   7.18882036,   5.67508936,  11.1764307 ,        11.86902809,   5.16173506,  13.92679405,  12.07235241,        13.60321426,   9.95770836,   4.92877722,   7.23551226,         5.46604538,   7.53572798,   4.53524113,   5.58128023,         5.24285555,   6.56978846,   4.2036581 ,   3.58105183,         3.0780189 ,   3.26461029,   2.21755457,   3.30043292,         1.67986429,   3.50561142,   2.12483692,   1.79027021,         3.14522529,   3.37545609,   3.47571969,   4.15455484]
FluxHistoryError = [[  5.43674803,   8.30885506],       [  5.23988342,   8.60019207],       [  8.80139923,  12.11433697],       [  9.4703083 ,  12.94377327],       [  5.99623299,   9.15364361],       [  9.7722044 ,  13.16172886],       [  5.61955547,   8.66055489],       [  9.38226318,  12.95205498],       [  5.35115433,   8.37720871],       [  7.59321404,  11.11314392],       [  8.29310226,  11.72202587],       [  8.92998123,  12.22236538],       [  7.4035182 ,  10.64616585],       [ 11.87592983,  15.44782829],       [ 22.07302666,  26.41479683],       [  9.39847755,  12.68875313],       [  6.48079586,   9.8426075 ],       [  5.73638296,   8.76350212],       [  4.20998287,   7.28663349],       [  9.48902225,  12.97198296],       [ 10.22859669,  13.59112549],       [  3.77843285,   6.7041893 ],       [ 12.2176342 ,  15.73645592],       [ 10.28679085,  13.98600006],       [ 11.8574028 ,  15.45699596],       [  8.23532009,  11.83358383],       [  3.56748796,   6.41939402],       [  5.80274487,   8.82505035],       [  3.98194361,   7.10386562],       [  6.09751129,   9.08169365],       [  3.22185421,   6.0101676 ],       [  4.34971523,   6.91562271],       [  3.87688208,   6.7520628 ],       [  5.15491867,   8.10080051],       [  2.91750336,   5.61711407],       [  2.31587076,   5.00954485],       [  1.81738031,   4.49208498],       [  2.0540204 ,   4.67714977],       [  1.12224054,   3.47385883],       [  2.11347294,   4.66314602],       [  0.75531679,   2.83414936],       [  2.39214969,   4.78537083],       [  1.11538684,   3.39109278],       [  0.81245476,   2.93476772],       [  1.80664742,   4.6413703 ],       [  2.26320076,   4.64632607],       [  2.29778719,   4.82340431],       [  2.82392764,   5.65148163]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.45982117e+02],       [  5.47000000e+02,   1.67499802e+02],       [  1.73200000e+03,   5.48194656e+01],       [  5.47700000e+03,   2.20967598e+01],       [  3.16220000e+04,   7.41604137e+00]]
SpectrumError = [[  1.73000000e+02,   4.89960693e+02,   6.02465576e+02],       [  5.47000000e+02,   1.57303650e+02,   1.77695953e+02],       [  1.73200000e+03,   5.19790192e+01,   5.76599121e+01],       [  5.47700000e+03,   2.07458782e+01,   2.34476414e+01],       [  3.16220000e+04,   6.69119215e+00,   8.14089108e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]